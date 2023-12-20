import React, { useState } from 'react';
import NotesContext from './NotesContext';

const NoteState = (props) => {
  const noteInitial=[
    {
      "_id": "657f14f703c4cf633f77a4b5",
      "user": "657efe3c22555abb07de34a8",
      "title": "Job",
      "description": "I want to get a new job with some good money",
      "tag": "future",
      "date": "2023-12-17T15:34:15.161Z",
      "__v": 0
    },
    {
      "_id": "6582e0a710a5484991d94b7d",
      "user": "657efe3c22555abb07de34a8",
      "title": "elecBill",
      "description": "I have to pay the electricity bill",
      "tag": "bills",
      "date": "2023-12-20T12:40:07.971Z",
      "__v": 0
    },
    {
      "_id": "6582e0cd10a5484991d94b7f",
      "user": "657efe3c22555abb07de34a8",
      "title": "phoneBill",
      "description": "I have to pay the phone bill",
      "tag": "bills",
      "date": "2023-12-20T12:40:45.157Z",
      "__v": 0
    }
  ]
  const [notes, setnotes]=useState(noteInitial);
  return (
    <NotesContext.Provider value={{notes, setnotes}}>
      {props.children}
    </NotesContext.Provider>
  )
}

export default NoteState;