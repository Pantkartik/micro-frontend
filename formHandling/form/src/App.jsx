import React from "react";
import { useState,useEffect } from "react";

const App=()=>{
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("form submited !")
  }
  return(
    <>
    <div className="parent">
      <div className="form">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} placeholder="form">
          <input type="text" placeholder="Enter your name"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App;