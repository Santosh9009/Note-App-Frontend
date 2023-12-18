import React from 'react';
import NotesContext from './NotesContext';

const NoteState = (props) => {
  const s1={
    name:"santu",
    age: "16"
  }
  
  return (
    <NotesContext.Provider value={s1}>
      {props.children}
    </NotesContext.Provider>
  )
}

export default NoteState;