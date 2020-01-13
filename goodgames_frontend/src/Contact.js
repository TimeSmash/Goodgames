import React from 'react';
import AdBar from './AdBar';
import facebookLogo from "./images/facebook-logo.png"
import twitterLogo from "./images/twitter-logo.png"
import githubLogo from "./images/github-logo.png"
import emailLogo from "./images/email-logo.png"

import "./Contact.css"

const Contact = () => (
     // The twitter and Github lead to 404s
     <div>
     <h1 id="contact-heading">Contact</h1>
     <div id="contact-adbar-container"><AdBar></AdBar></div>
     <div id="logo-container">
          <a href = "https://www.facebook.com/Goodgames-114895753221357/?view_public_for=114895753221357" target="_blank" rel="noopener noreferrer"><img src ={facebookLogo} alt="facebook-link"></img></a>
          <a href = "https://www.twitter.com/Goodgames64" target="_blank" rel="noopener noreferrer"><img src ={twitterLogo} alt="twitter-link" ></img></a>
          <a href = "https://www.facebook.com/Goodgames-114895753221357/?view_public_for=114895753221357" target="_blank" rel="noopener noreferrer"><img id= "github-logo" src ={githubLogo} alt="github-link"></img></a>
          <a href = "https://gmail.com" target="_blank" rel="noopener noreferrer"><img id= "email-logo" src ={emailLogo} alt="email-link"></img></a>
     </div>
     <div id="slogans">
          <h2>Like us on Facebook!</h2>
          <h2>Follow us on Twitter!</h2>
          <h2>Check out this repo on Github!</h2>
          <h2>Email us!</h2>
     </div>
     </div>
);

export default Contact;