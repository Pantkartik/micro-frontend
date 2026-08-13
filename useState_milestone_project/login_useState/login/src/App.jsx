import React, { useState } from 'react';
import Button from './Components/Buttons';
import Likes from './Components/Likes';

const App=()=>{
  const [likes,setLikes]=useState(0);
  const data=[10,20,30,40];
  function Add(){
    setLikes(prev=>(prev+1)) // batch update
    setLikes(likes+1);
  }
  
  return(
    <>

    <div className="parent">
      <div className="likes">
        <Likes likes={likes}></Likes>
      </div>
      <Button likes={likes} setLikes={setLikes}></Button>
    </div>
    </>
  )
}

export default App;