import React, { useState } from "react";
import NotesContext from "./NotesContext";
import toast from "react-hot-toast";

const NoteState = (props) => {
  const noteInitial = [];
  const [notes, setnotes] = useState(noteInitial);
  const host = "http://localhost:5000";

  // Get all note
  const getNotes = async () => {
    // API call

    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    // setNotes
    setnotes(json);
  };

  // Add note
  const addNote = async (title, description, tag) => {
    // API call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    // Logic for adding a note
    setnotes([...notes, json]);
    toast.success("Created Successfully");
  };

  // Delete note
  const deleteNote = async (id) => {
    console.log("deleted successfully");
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);

    // Logic for deleting a note
    const updatednote = notes.filter((note) => note._id !== id);
    setnotes(updatednote);
    toast.success("Deleted Successfully");
  };

  //Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic for updation
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    setnotes(newNotes);
    toast.success("Updated Successfully");
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NoteState;
