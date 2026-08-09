import React from "react";
import './index.css'
import Card from "./components/Card";

const App=()=>{
  const arr=[
    {
      user:"kartik",
      age:23
    },
    {
      user:"Amit",
      age:20
    },
    {
      user:"Nilesh",
      age:28
    }
  ];
  arr.map(function(elem){
      console.log(elem.age)
  })
  return (
    <>
    <div className="Parent">
    <Card name="Kartik" des="Full stack developer"
    
    
    stat={"25 K"}
    stat2={20}
    github={"https://github.com/Pantkartik"}></Card>
    <Card name="Amit" des="Dsa Expert"
    
    
    stat={"20 K"}
    stat2={10}
    github={"https://github.com/nowordsyours"}></Card>
    </div>
    
    </>
    
  )
}

export default App;