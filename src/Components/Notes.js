import React, { useContext, useEffect, useRef, useState } from "react";
import NotesContext from "../Context/NotesContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const { notes, getNotes, editNote } = useContext(NotesContext);
  const [note, setnote]=useState({id:"",etitle:"",edescription:"",etag: ""});
  const ref=useRef(null);
  const refClose=useRef(null);

  useEffect(() => {
    getNotes();
  }, []);

  const updatenote=(currentnote)=>{
    ref.current.click();
    setnote({id:currentnote._id,etitle:currentnote.title, edescription:currentnote.description, etag:currentnote.tag});
  }
  const onChange=(e)=>{
    setnote({...note, [e.target.name]:e.target.value});
  }
  const handleClick=(e)=>{
    console.log("updating a note...")
    editNote(note.id, note.etitle, note.edescription, note.etag);
    ref.current.click();
  }
 

  return (
    <>
    <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal" 
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <div className="mb-3">
        <label htmlFor="etitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="etitle"
          name="etitle"
          onChange={onChange}
          value={note.etitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edescription" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="edescription"
          name="edescription"
          onChange={onChange}
          value={note.edescription}
        />
        <div id="emailHelp" className="form-text">
          Write a description for your note
        </div>
      <div className="my-3">
        <label htmlFor="etag" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="etag"
          name="etag"
          onChange={onChange}
          value={note.etag}
        />
      </div>
      </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h3>Your Notes</h3>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} updatenote={updatenote} />;
        })}
      </div>
    </>
  );
};

export default Notes;
