import React from 'react';
import img1 from "./../../images/profilePhoto.png";
import "./../../styles/style.css";



export default function Home() {
  return (
    <div id="bio">

      <img id="photo" src={img1} alt="profilePhoto" />
      <div className="summary">
        <h2>Bio</h2>
        <p>Full stack developer with a varied background, ranging from package shipping to screenwriting. Recently graduated from Penn’s LPS Coding Bootcamp and looking to set my roots in the industry of web development. Skilled in Javascript, CSS, databases and currently learning Python. Very adaptable to new projects and knows how to get things done on a deadline. I’m not afraid of tedious work; in fact, I thrive with it. Excited to partner with your team to drive process improvements and enhance the user experience!</p>
      </div>

    </div>
  );
}
