import React from "react";
import { useState } from "react";

const App=()=>{
  const [count,setCount]=useState(0);
  function IncreaseCount(){
    setCount(count+1);
  }
  function DecreaseCount(){
    setCount(count-1);
  }
return(
  <>
  <div>
    <h1> The number increasing is {count}</h1>
  </div>
<button onClick={IncreaseCount}>Increase</button>
<button onClick={DecreaseCount}>Decrease</button>
  </>
)
}


export default App;
