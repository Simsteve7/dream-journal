export interface Note {
  id: string;
  content: string;
  category: NoteCategory;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
}

export type NoteCategory = 'dream';

export interface User {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
  photoURL?: string;
}

export type AuthProvider = 'google' | 'facebook' | 'github' | 'microsoft';

export interface AppSettings {
  language: string;
  theme: 'light' | 'dark';
  storageMode: 'local' | 'cloud';
}

export interface CloudSyncConfig {
  enabled: boolean;
  provider: AuthProvider | null;
  lastSync: Date | null;
}