import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './hooks/useApp';
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
import { QuickEntry } from './components/QuickEntry';
import './App.css';

function AppContent() {
  const { state } = useApp();
  const [showQuickEntry, setShowQuickEntry] = useState(false);

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', state.settings.theme);
  }, [state.settings.theme]);

  // Global keyboard shortcut for quick entry
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'q') {
        e.preventDefault();
        setShowQuickEntry(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="App">
      <Header onQuickEntry={() => setShowQuickEntry(true)} />
      <main className="main-content">
        <NoteInput />
        <NotesList />
      </main>
      <QuickEntry 
        isOpen={showQuickEntry}
        onClose={() => setShowQuickEntry(false)}
      />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
