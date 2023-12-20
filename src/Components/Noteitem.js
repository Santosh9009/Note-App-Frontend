import React from "react";

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
      </div>
      <div className="container mb-2">
        <i className="fa-solid fa-trash"></i>
        <i className="fa-solid fa-pen-to-square mx-2"></i>
      </div>
    </div>
  );
};

export default Noteitem;
