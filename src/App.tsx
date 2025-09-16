import React from 'react';
import { AppProvider } from './hooks/useApp';
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <NoteInput />
          <NotesList />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
