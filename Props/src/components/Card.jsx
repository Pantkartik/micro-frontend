import React from "react";
const Card=(props)=>{



    return(
        <>
        <div className="Parent">
        <div className="card">
            <img src="https://images.pexels.com/photos/28267590/pexels-photo-28267590.jpeg" alt="image-profile" />
        <h1 className="h1-name">{props.user}</h1>
        <h2 className="h1-name">{props.age}</h2>
        <p className="p-card"> Hello world this is a prop drilling demostration</p>
        <div className="Button"> View Profile</div>
        </div>
        </div>
        </>
    )
}

export default Card;