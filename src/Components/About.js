import React, { useContext} from 'react';
import NotesContext from '../Context/NotesContext';

const About = () => {
  const a =useContext(NotesContext);

  return (
    <div>my name is {a.name} and my age is {a.age} </div>
  )
}

export default About;