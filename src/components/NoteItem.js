import React from 'react';

function NoteItem({ note, onClick }) {
  return (
    <li onClick={onClick}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
    </li>
  );
}
export default NoteItem