<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { AppProvider } from './hooks/useApp';
=======
import React, { useEffect } from 'react';
import { AppProvider, useApp } from './hooks/useApp';
>>>>>>> 1a2ddb5 (Implement complete dark mode functionality with theme toggle)
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
import { QuickEntry } from './components/QuickEntry';
import './App.css';

function AppContent() {
  const { state } = useApp();

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', state.settings.theme);
  }, [state.settings.theme]);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <NoteInput />
        <NotesList />
      </main>
    </div>
  );
}

function App() {
  const [showQuickEntry, setShowQuickEntry] = useState(false);

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
    <AppProvider>
<<<<<<< HEAD
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
=======
      <AppContent />
>>>>>>> 1a2ddb5 (Implement complete dark mode functionality with theme toggle)
    </AppProvider>
  );
}

export default App;
