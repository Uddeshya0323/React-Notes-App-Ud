// src/components/NoteForm.js
import React, { useState } from "react";
import './NoteForm.css';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({ title: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Reset errors
    setErrors({ title: "", body: "" });

    // Validate title and body
    if (!title) {
      setErrors((prevErrors) => ({ ...prevErrors, title: "Title is required." }));
      formIsValid = false;
    }
    if (!body) {
      setErrors((prevErrors) => ({ ...prevErrors, body: "Note content is required." }));
      formIsValid = false;
    }

    if (formIsValid) {
      addNote(title, body);
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            placeholder="Enter a note title."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="note">
          Note
          <textarea
            id="note"
            cols="30"
            rows="10"
            placeholder="Enter note text."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        {errors.body && <p className="error">{errors.body}</p>}
      </div>
      <input type="submit" value="Add Note" />
    </form>
  );
}

export default NoteForm;
