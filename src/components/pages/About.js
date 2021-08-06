import React from 'react';
import "./../../styles/style.css";
import resume from "./../../resume/benThackrayResume.pdf";


export default function About() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p><a href={resume} download>Download Here</a></p>
      <p>Ben has skills in HTML, CSS, Javascript, node, SQL, Mongo, React and other programming languages!</p>
    </div>
  );
}
