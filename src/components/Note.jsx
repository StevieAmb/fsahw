import React from "react";

const Note = ({ note, id }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note;