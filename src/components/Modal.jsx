// src/components/Modal.js
import React from "react";

function Modal({ note, onClose }) {
  if (!note) return null;

  return (
    <div className="modal-container active">
      <div className="modal">
        <button className="modal__btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__title">{note.title}</h2>
        <p className="modal__body">{note.body}</p>
      </div>
    </div>
  );
}

export default Modal;
