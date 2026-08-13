import React from "react";
import { useState,useEffect } from "react";
import Note from "./Components/Note";
import Display from "./Components/Display"
const App=()=>{
  const [note,setnote]=useState('');
  const NoteHandler=(e)=>{
    e.preventDefault();
    console.log('All good');
    setnote('')
  }
return (
  <>
<div className="parent">
  <form onSubmit={NoteHandler}>
    <div className="main">
      <Note note={note} setnote={setnote}></Note>
    </div>
    <button type="submit"> Submit</button>
  </form>
</div>
<div className="display">
  <Display note={note}></Display>
</div>

  </>
)
}

export default App;