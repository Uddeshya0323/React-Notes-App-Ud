// src/App.js
import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Modal from "./components/Modal";

// Utility functions for local storage
const getNotesFromLocalStorage = () => {
  const notes = localStorage.getItem("noteApp.notes");
  return notes ? JSON.parse(notes) : [];
};

const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem("noteApp.notes", JSON.stringify(notes));
};

function App() {
  const [notes, setNotes] = useState(getNotesFromLocalStorage());
  const [modalNote, setModalNote] = useState(null);

  useEffect(() => {
    saveNotesToLocalStorage(notes);
  }, [notes]);

  const addNote = (title, body) => {
    const newNote = { title, body, id: Date.now() };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const viewNote = (note) => {
    setModalNote(note);
  };

  const closeModal = () => {
    setModalNote(null);
  };

  return (
    <div className="container">
      <Modal note={modalNote} onClose={closeModal} />
      <div className="form-container">
        <h1>Note Taker</h1>
        <NoteForm addNote={addNote} />
      </div>
      <NoteList notes={notes} onDelete={deleteNote} onView={viewNote} />
    </div>
  );
}

export default App;
