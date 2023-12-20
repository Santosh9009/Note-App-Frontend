import React,{useContext,useState} from 'react'
import NotesContext from '../Context/NotesContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(NotesContext);
  const [notes, setnotes]=useState(context.notes);

  return (
    
     <div className="row my-5">
       <h3>Your Notes</h3>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/> ;
      })}
    </div>
   
  )
}

export default Notes