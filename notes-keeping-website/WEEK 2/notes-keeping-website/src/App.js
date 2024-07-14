import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import DarkModeToggle from './components/DarkModeToggle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Retrieve notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
    toast.success("Note added!");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    toast.error("Note deleted!");
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <div className="container">
        <header className="d-flex justify-content-between align-items-center my-4">
          <h1>Notes Keeping Website</h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
