import React from "react";
const  Card=(props)=> {
  return (
    <div className="profile-card">

      {/* Profile Image */}
      <div className="profile-image-container">
        <img
          src="https://i.pinimg.com/736x/f4/59/2c/f4592c51f568e8268bdcddf3a767b6b6.jpg"
          alt="Kartik"
          className="profile-image"
        />
      </div>

      {/* Profile Info */}
      <div className="profile-content">

        <div className="profile-name">
          <h2>{props.name}</h2>

          <span className="verified">
            ✓
          </span>
        </div>

        <p className="profile-description">
          {props.des}
          <br />
          <button className="bt-github" onClick={() => window.open(props.github, "_blank")}>
            Github
          </button>
        </p>

        {/* Bottom Section */}
        <div className="profile-bottom">

          <div className="stats">

            <div className="stat">
              <span className="icon">♙</span>
              <span>{props.stat}</span>
            </div>

            <div className="stat">
              <span className="icon">▣</span>
              <span>{props.stat2}</span>
            </div>

          </div>

          <button className="follow-btn">
            Follow
            <span>+</span>
          </button>

        </div>

      </div>
    </div>
  );
}

export default Card;