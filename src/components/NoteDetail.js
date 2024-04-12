// NoteDetail.js
import React, { useState } from 'react';

function NoteDetail({ note, onUpdateNote, onDeleteNote }) {
  const [editedNote, setEditedNote] = useState(note);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSave = () => {
    onUpdateNote(editedNote);
  };

  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={editedNote.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        value={editedNote.description}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="text"
        name="media"
        value={editedNote.media}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default NoteDetail;
