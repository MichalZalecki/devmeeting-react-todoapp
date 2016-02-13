import React from 'react'

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <button onClick={onUndo} disabled={!canUndo}>Undo</button>
    <button onClick={onRedo} disabled={!canRedo}>Redo</button>
  </div>
);

export default UndoRedo;
