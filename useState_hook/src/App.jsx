// counter 
import React, { useState } from "react";

const App=()=>{
  const[num,setNum]=useState(1);

  function IncreaseNum(){
    setNum(num + 1);
  }
  
  function DecreaseNum(){
    setNum(num - 1);
  }

  return (
    <>
    <h1> The number is {num}</h1>
    <br />
    <button onClick={IncreaseNum}>Increase</button>
    <br />
    <button onClick={DecreaseNum}>Decrease</button>


    </>
  )
}




export default App;










// import { useState } from "react";
// import React from "react";

// const App=()=>{
//   // setting up of useState for changing the value of the number
//   const[a,setA]=useState(10);
//   const[username,setUsername]=useState('Kartik')
//   function ChangeA(){
//     setA(a+5);
//   }
//   function ChangeUsername(){
//     setUsername('naman')
//   }
//   return(
//     <>
//     <h1>The value of a is {a}</h1>
//     <button onClick={ChangeA}> Click on me </button>
    
//     <h1>The name is {username}</h1>
//     <button onClick={ChangeUsername}> change username </button>
//     </>
//   )
// }


// export default App;