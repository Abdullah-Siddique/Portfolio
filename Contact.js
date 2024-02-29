import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="h1">Contact with me</h1>
      <ul className="contact-list">
        <li>
          <a href="https://www.facebook.com/abdullah.r.siddique" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="social-icon"
            />

          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abdullah-siddique-633bbb249/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              alt="LinkedIn"
              className="social-icon"
            />

          </a>
        </li>
        <li>
          <a href="https://github.com/Abdullah-Siddique" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="social-icon"
            />

          </a>
        </li>
        <li>
          <a href="https://twitter.com/s2009_abdullah" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.svgrepo.com/show/12848/x-symbol.svg"
              alt="Twitter"
              className="social-icon"
            />

          </a>
        </li>
        <li>
          <a href="mailto:siddiqueabdullah581@gmail.com">
            <img src="https://www.svgrepo.com/download/14478/email.svg"
            alt="email"
            className="social-icon"
            />



          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;








