import { useState } from "react";
import React from "react";

const App=()=>{
  // setting up of useState for changing the value of the number
  const[a,setA]=useState(10);
  const[username,setUsername]=useState('Kartik')
  function ChangeA(){
    setA(a+5);
  }
  function ChangeUsername(){
    setUsername('naman')
  }
  return(
    <>
    <h1>The value of a is {a}</h1>
    <button onClick={ChangeA}> Click on me </button>
    
    <h1>The name is {username}</h1>
    <button onClick={ChangeUsername}> change username </button>
    </>
  )
}


export default App;