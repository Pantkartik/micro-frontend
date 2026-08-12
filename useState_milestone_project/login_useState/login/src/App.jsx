import React, { useState } from 'react';
import Button from './Components/Buttons';
import Likes from './Components/Likes';

const App=()=>{
  const [likes,setLikes]=useState(0);
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