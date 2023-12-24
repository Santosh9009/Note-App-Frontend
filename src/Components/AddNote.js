import React, { useContext, useState } from 'react';
import NotesContext from '../Context/NotesContext';

const AddNote = () => {
  const {addNote} = useContext(NotesContext);


  const [note, setnote]=useState({title:"",description:"",tag: ""});

  

  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }


  const onChange=(e)=>{
    setnote({...note, [e.target.name]:e.target.value});
  }

  return (
    <div className="container my-5">
    <h2>Add a Note </h2>
    <form>
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
        />
      </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </form>
  
  </div>

    )
}

export default AddNote