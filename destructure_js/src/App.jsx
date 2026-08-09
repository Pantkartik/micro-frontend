import React from "react";
import { useState } from "react";
const [user,setUser]=useState({user:"kartik",age:20})
function ChangeUser(){
  // destructing the code detaching the reference
  newUser={...user}
  newUser.age=27;
  newUser.user='naman';
  setUser(newUser);
}
const App=()=>{
  return (
    <>
<h1 >Hello</h1>
<button onClick={newUser}></button>

</>
  )

}

export default App;