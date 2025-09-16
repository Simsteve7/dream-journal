import localforage from 'localforage';
import { Note, AppSettings, CloudSyncConfig } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Configure localforage
localforage.config({
  name: 'DreamJournal',
  storeName: 'notes'
});

const NOTES_KEY = 'notes';
const SETTINGS_KEY = 'settings';
const SYNC_CONFIG_KEY = 'syncConfig';

export class StorageService {
  static async getNotes(): Promise<Note[]> {
    try {
      const notes = await localforage.getItem<Note[]>(NOTES_KEY);
      return notes || [];
    } catch (error) {
      console.error('Error getting notes:', error);
      return [];
    }
  }

  static async saveNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> {
    try {
      const notes = await this.getNotes();
      const newNote: Note = {
        ...note,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      notes.unshift(newNote); // Add to beginning for recent-first ordering
      await localforage.setItem(NOTES_KEY, notes);
      return newNote;
    } catch (error) {
      console.error('Error saving note:', error);
      throw error;
    }
  }

  static async updateNote(id: string, updates: Partial<Note>): Promise<Note | null> {
    try {
      const notes = await this.getNotes();
      const index = notes.findIndex(note => note.id === id);
      
      if (index === -1) return null;
      
      notes[index] = {
        ...notes[index],
        ...updates,
        updatedAt: new Date()
      };
      
      await localforage.setItem(NOTES_KEY, notes);
      return notes[index];
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  }

  static async deleteNote(id: string): Promise<boolean> {
    try {
      const notes = await this.getNotes();
      const filteredNotes = notes.filter(note => note.id !== id);
      
      if (filteredNotes.length === notes.length) return false;
      
      await localforage.setItem(NOTES_KEY, filteredNotes);
      return true;
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }

  static async getSettings(): Promise<AppSettings> {
    try {
      const settings = await localforage.getItem<AppSettings>(SETTINGS_KEY);
      return settings || {
        language: 'en',
        theme: 'light',
        storageMode: 'local'
      };
    } catch (error) {
      console.error('Error getting settings:', error);
      return {
        language: 'en',
        theme: 'light',
        storageMode: 'local'
      };
    }
  }

  static async saveSettings(settings: AppSettings): Promise<void> {
    try {
      await localforage.setItem(SETTINGS_KEY, settings);
    } catch (error) {
      console.error('Error saving settings:', error);
      throw error;
    }
  }

  static async getSyncConfig(): Promise<CloudSyncConfig> {
    try {
      const config = await localforage.getItem<CloudSyncConfig>(SYNC_CONFIG_KEY);
      return config || {
        enabled: false,
        provider: null,
        lastSync: null
      };
    } catch (error) {
      console.error('Error getting sync config:', error);
      return {
        enabled: false,
        provider: null,
        lastSync: null
      };
    }
  }

  static async saveSyncConfig(config: CloudSyncConfig): Promise<void> {
    try {
      await localforage.setItem(SYNC_CONFIG_KEY, config);
    } catch (error) {
      console.error('Error saving sync config:', error);
      throw error;
    }
  }

  static async clearAllData(): Promise<void> {
    try {
      await localforage.clear();
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  }
}