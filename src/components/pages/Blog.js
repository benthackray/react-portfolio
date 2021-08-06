import React from 'react';
import "./../../styles/style.css";
import pye_home from "./../../images/pye_home.png";
import film from "./../../images/filmtrivia.png";
import employee from "./../../images/employee_tracker.png";
import pwordgen from "./../../images/pwordgen.png";
import planner from "./../../images/planner.png";




export default function Blog() {
  return (
  <div id="projects" className="portfolio">

    <h2>Projects</h2>
    
    <article className="deck">

        <div id="firstPhoto" className="card">
            <a href="https://cryptic-basin-25278.herokuapp.com/">
                <img src={pye_home} alt="A fun social pie chart site" />
                <p>Pye</p>
            </a>
        </div>

        <div className="card">
            <a href="https://sushistarlove.github.io/movie-trivia-jbg/index.html">
                <img src={film} alt="A fun trivia game for you and your friends" />
                <p>Movie Trivia Game</p>
            </a>
        </div>

        <div className="card">
            <a href="https://github.com/benthackray/employee-tracker">
                <img src={employee} alt="A node module for keeping track of employees" />
                <p>Employee Tracker</p>
            </a>
        </div>

        <div className="card">
            <a href="https://benthackray.github.io/passwordGenerator/">
                <img src={pwordgen} alt="A helpful tool for making a secure password" />
                <p>Password Generator</p>
            </a>
        </div>

        <div className="card">
            <a href="https://benthackray.github.io/workDayScheduler/">
                <img src={planner} alt="A planner to schedule your work day" />
                <p>Daily Planner</p>
            </a>
        </div>

    </article>

  </div>
  );
}
