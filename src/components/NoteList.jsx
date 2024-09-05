// src/components/NoteList.js
import React from "react";
import Note from "./Note";
import "./NoteList.css"; // Ensure this import is correct

function NoteList({ notes, onDelete, onView }) {
  return (
    <div className="note-container">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onView={onView} />
      ))}
    </div>
  );
}

export default NoteList;
