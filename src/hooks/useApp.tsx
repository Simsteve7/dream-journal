import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Note, User, AppSettings, CloudSyncConfig, NoteCategory } from '../types';
import { StorageService } from '../services/storage';

interface AppState {
  notes: Note[];
  user: User | null;
  settings: AppSettings;
  syncConfig: CloudSyncConfig;
  isLoading: boolean;
  error: string | null;
}

type AppAction = 
  | { type: 'SET_NOTES'; payload: Note[] }
  | { type: 'ADD_NOTE'; payload: Note }
  | { type: 'UPDATE_NOTE'; payload: { id: string; updates: Partial<Note> } }
  | { type: 'DELETE_NOTE'; payload: string }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_SETTINGS'; payload: AppSettings }
  | { type: 'SET_SYNC_CONFIG'; payload: CloudSyncConfig }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: AppState = {
  notes: [],
  user: null,
  settings: {
    language: 'en',
    theme: 'light',
    storageMode: 'local'
  },
  syncConfig: {
    enabled: false,
    provider: null,
    lastSync: null
  },
  isLoading: false,
  error: null
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.payload };
    case 'ADD_NOTE':
      return { ...state, notes: [action.payload, ...state.notes] };
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id
            ? { ...note, ...action.payload.updates }
            : note
        )
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_SETTINGS':
      return { ...state, settings: action.payload };
    case 'SET_SYNC_CONFIG':
      return { ...state, syncConfig: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  actions: {
    addNote: (content: string, category: NoteCategory) => Promise<void>;
    updateNote: (id: string, updates: Partial<Note>) => Promise<void>;
    deleteNote: (id: string) => Promise<void>;
    updateSettings: (settings: AppSettings) => Promise<void>;
    loadData: () => Promise<void>;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    addNote: async (content: string, category: NoteCategory) => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const note = await StorageService.saveNote({
          content,
          category,
          userId: state.user?.id
        });
        dispatch({ type: 'ADD_NOTE', payload: note });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to save note' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },

    updateNote: async (id: string, updates: Partial<Note>) => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const updatedNote = await StorageService.updateNote(id, updates);
        if (updatedNote) {
          dispatch({ type: 'UPDATE_NOTE', payload: { id, updates } });
        }
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to update note' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },

    deleteNote: async (id: string) => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const success = await StorageService.deleteNote(id);
        if (success) {
          dispatch({ type: 'DELETE_NOTE', payload: id });
        }
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to delete note' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },

    updateSettings: async (settings: AppSettings) => {
      try {
        await StorageService.saveSettings(settings);
        dispatch({ type: 'SET_SETTINGS', payload: settings });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to save settings' });
      }
    },

    loadData: async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const [notes, settings, syncConfig] = await Promise.all([
          StorageService.getNotes(),
          StorageService.getSettings(),
          StorageService.getSyncConfig()
        ]);
        
        dispatch({ type: 'SET_NOTES', payload: notes });
        dispatch({ type: 'SET_SETTINGS', payload: settings });
        dispatch({ type: 'SET_SYNC_CONFIG', payload: syncConfig });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load data' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
  };

  useEffect(() => {
    actions.loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}