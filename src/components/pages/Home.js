import React from 'react';
import img1 from "./../../images/profilePhoto.png";
import "./../../styles/style.css";



export default function Home() {
  return (
    <div id="bio">

      <img id="photo" src={img1} alt="profilePhoto" />
      <div className="summary">
        <h2>Bio</h2>
        <p>Ben is a full stack developer from Northwest Philadelphia. He has been coding since May of 2021. In his spare time he writes comedy and plays roller derby. Please, please hire him.</p>
      </div>

    </div>
  );
}
