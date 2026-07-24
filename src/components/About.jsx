import React from "react";
import "../styles/about.css";
import profileImg from "../imgs/profile.jpeg";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2>ABOUT ARIS</h2>
        <img src={profileImg} alt="Profile Picture" />
        <p>
          I like building websites that are fast, clean, and just a little bit
          satisfying to use. There's always something new to learn—and that's my
          favorite part.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abraaogrigoriog@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="gmail-btn"
        >
          SAY HELLO VIA GMAIL ↗
        </a>
        <div className="social-pills">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            class="social-pill"
            id="linkedin"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="social-pill"
            id="github"
          >
            GITHUB
          </a>
          <a
            href="https://x.com/yourusername"
            target="_blank"
            class="social-pill"
            id="instagram"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
