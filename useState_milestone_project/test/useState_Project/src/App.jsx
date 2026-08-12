import React from "react";
import { useState } from "react";
const App=()=>{
  const [isOn,setOn]=useState(false);
  function On(){
    setOn(true);
  }
  function Off(){
    setOn(false);
  }
  return(
    <>
    <h1>The default value is {isOn?"ON":"OFF"}</h1>
    <button onClick={On}>ON</button>
    <button onClick={Off}>OFF</button>
    </>
  )
}

export default App;