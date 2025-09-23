import React, { useEffect } from 'react';
import { AppProvider, useApp } from './hooks/useApp';
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
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
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
