import React, { useState } from 'react';
import "./../../styles/style.css";
import { validateEmail } from '../../utils/helpers';




export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    alert(`Hello ${name}`);

    setUserName('');
    setEmail('');
  };

  return (
    <div className="contact" id="contact">

        <h2>Contact</h2>


        <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

          <ul>
              <li>Email: mthack92@gmail.com</li>
              <li>Phone: (215) 882-9841</li>
          </ul>

    </div>
  );
}
