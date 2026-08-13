// two way binding of form 

import react from 'react';
import { useState } from 'react';

const App=()=>{
  const[submit,setSubmit]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Form submitted by ",submit);

    setSubmit('')
  }
  return(
    <>
    <h1>Two way binding</h1>
    <div className="parent">
    <form onSubmit={(e)=>{
      submitHandler(e);
    }}>
      <input type="text"
      placeholder='Enter your name'
      value={submit}
      onChange={(e)=>{
        setSubmit(e.target.value)
      }} />
      <button type='submit'>submit</button>
    </form>
    </div>
    </>
  )
}

export default App;