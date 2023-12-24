import React, { useContext } from "react";
import NotesContext from "../Context/NotesContext";

const Noteitem = (props) => {
  const { note , updatenote} = props;
  const {deleteNote}= useContext(NotesContext);

  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
      </div>
      <div className="container mb-2">
        <i className="fa-solid fa-trash mx-1" onClick={()=>{deleteNote(note._id)}}></i>
        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
      </div>
    </div>
  );
};

export default Noteitem;
