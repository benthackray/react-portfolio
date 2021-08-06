import React from 'react';
import "../styles/style.css";



// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="header">

      <div className="name">
        <h1><span id="ben">Ben</span>Thackray</h1>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#blog"
            onClick={() => handlePageChange('Blog')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
