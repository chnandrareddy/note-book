
import React, { useState } from 'react';
import NoteItem from './NoteItem';

function Homepage({ notes, setSelectedNote }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredNotes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onClick={() => setSelectedNote(note)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
