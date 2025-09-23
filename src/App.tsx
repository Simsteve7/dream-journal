import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './hooks/useApp';
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
import { QuickEntry } from './components/QuickEntry';
import './App.css';

// Verwijderd: dubbele AppContent component

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
      <div className="App">
        <Header onQuickEntry={() => setShowQuickEntry(true)} />
        <main className="main-content">
          <NoteInput />
          <NotesList />
        </main>
        {showQuickEntry && <QuickEntry isOpen={showQuickEntry} onClose={() => setShowQuickEntry(false)} />}
      </div>
    </AppProvider>
  );
}

export default App;
