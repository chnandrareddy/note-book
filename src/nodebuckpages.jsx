import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import NoteDetail from './components/NoteDetail';
import NoteForm from './components/NoteForm';
import FloatingButton from './components/FloatingButton';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    // Fetch notes from local storage on component mount
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleSaveNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setSelectedNote(null);
  };

  return (
    <div>
      <Homepage
        notes={notes}
        setSelectedNote={setSelectedNote}
      />
      {selectedNote ? (
        <NoteDetail
          note={selectedNote}
          onUpdateNote={handleUpdateNote}
          onDeleteNote={handleDeleteNote}
        />
      ) : (
        <FloatingButton />
      )}
      <NoteForm onSaveNote={handleSaveNote} />
    </div>
  );
}




export default App;