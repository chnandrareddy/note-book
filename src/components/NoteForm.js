import React, { useState } from 'react';

function NoteForm({ onSaveNote }) {
  const [newNote, setNewNote] = useState({
    title: '',
    description: '',
    media: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSaveNote({
      ...newNote,
      id: Date.now() // Unique ID for each note
    });
    setNewNote({
      title: '',
      description: '',
      media: ''
    });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newNote.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newNote.description}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="text"
        name="media"
        placeholder="Media"
        value={newNote.media}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Add Note</button>
    </div>
  );
}

export default NoteForm;
