import React, { useState } from "react";
import NotesContext from "./NotesContext";

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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZWZlM2MyMjU1NWFiYjA3ZGUzNGE4In0sImlhdCI6MTcwMjgyNDMyOX0.PPqFKf7AmMaHcBTDg4jID_AtsleRHLr99nUAkWoJgZE",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZWZlM2MyMjU1NWFiYjA3ZGUzNGE4In0sImlhdCI6MTcwMjgyNDMyOX0.PPqFKf7AmMaHcBTDg4jID_AtsleRHLr99nUAkWoJgZE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // Logic for adding a note
    const newNote={
      "_id": "6582e0cd10a5484991d94b7f",
      "user": "657efe3c22555abb07de34a8",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-12-20T12:40:45.157Z",
      "__v": 0
    }
    setnotes([...notes, newNote]);
  };

  // Delete note
  const deleteNote = async (id) => {
    console.log("deleted successfully");
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZWZlM2MyMjU1NWFiYjA3ZGUzNGE4In0sImlhdCI6MTcwMjgyNDMyOX0.PPqFKf7AmMaHcBTDg4jID_AtsleRHLr99nUAkWoJgZE",
      },
    });
    const json = await response.json();
    console.log(json);

    // Logic for deleting a note
    const updatednote = notes.filter((note) => note._id !== id);
    setnotes(updatednote);
  };

  //Edit note
  const editNote = async (id, title, description, tag) => {
    // const updatedNotes = notes.map(note => (note._id === id ? { ...note, title, description,tag } : note));
    // setnotes(updatedNotes);

    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ZWZlM2MyMjU1NWFiYjA3ZGUzNGE4In0sImlhdCI6MTcwMjgyNDMyOX0.PPqFKf7AmMaHcBTDg4jID_AtsleRHLr99nUAkWoJgZE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let newNotes=JSON.parse(JSON.stringify(notes))
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
