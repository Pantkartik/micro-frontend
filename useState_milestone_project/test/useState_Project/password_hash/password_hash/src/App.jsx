import React from "react";
import { useState } from "react";
// making a switch for the hashing to text
//  convertion and vice versa 
// not hashing just ****** to 123457 same as this

const App=()=>{
const[isText,setText]=useState(String("**********"));

const Totext=()=>{
setText("kartik@2005")
}
const Tohash=()=>{
setText("**********")
}

  return (
    <>
    <h1>The password is  {isText}</h1>
    <button onClick={Totext}>Text</button>
    <button onClick={Tohash}>Hash</button>

    </>
  )
}

export default App;