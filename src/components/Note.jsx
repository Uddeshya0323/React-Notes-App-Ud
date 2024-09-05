// src/components/Note.js
import React from "react";

function Note({ note, onDelete, onView }) {
  return (
    <div className="note">
      <span hidden>{note.id}</span>
      <h2 className="note__title">{note.title}</h2>
      <p className="note__body">{note.body}</p>
      <div className="note__btns">
        <button className="note__btn note__view" onClick={() => onView(note)}>
          View Detail
        </button>
        <button
          className="note__btn note__delete"
          onClick={() => onDelete(note.id)}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
}

export default Note;
