import React from 'react';

function FloatingButton() {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button onClick={() => console.log('Add new note')}>+</button>
    </div>
  );
}

export default FloatingButton;