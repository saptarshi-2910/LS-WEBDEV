import React from 'react';

const Note = ({ note, deleteNote, index }) => {
  return (
    <div className="card my-2 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <button className="btn btn-danger" onClick={() => deleteNote(index)}>
          <i className="fas fa-trash-alt mr-2"></i>Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
