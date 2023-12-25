import React, { useContext, useState } from 'react';
import NotesContext from '../Context/NotesContext';

const AddNote = () => {
  const {addNote} = useContext(NotesContext);


  const [note, setnote]=useState({title:"",description:"",tag: ""});


  const onChange=(e)=>{
    setnote({...note, [e.target.name]:e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({title:"",description:"",tag: ""});
  };

  return (
    <div className="container my-5">
    <h2>Add a Note </h2>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={onChange}
          minLength={5}
          required
          value={note.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={onChange}
          minLength={5}
          required
          value={note.description}
        />
        <div id="emailHelp" className="form-text">
          Write a description for your note
        </div>
      <div className="my-3">
        <label htmlFor="tag" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          onChange={onChange}
          minLength={3}
          required
          value={note.tag}
        />
      </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  
  </div>

    )
}

export default AddNote