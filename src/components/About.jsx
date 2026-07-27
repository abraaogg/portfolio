import React from "react";
import "../styles/about.css";
import profileImg from "../imgs/profile.jpeg";
import { GoArrowUpRight } from "react-icons/go";


function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <h2>ABOUT ARIS</h2>
        <img src={profileImg} alt="Profile Picture" />
        <p>
          I like building websites that are fast, clean, and just a little bit
          satisfying to use. There's always something new to learn—and that's my
          favorite part.
        </p>

        <div className="section-divider">
          <span></span>
        </div>

        <div className="contact-section">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abraaogrigoriog@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gmail-btn"
          >
            SAY HELLO VIA GMAIL <GoArrowUpRight />
          </a>
          <div className="social-pills">
            <a
              href="https://www.linkedin.com/in/abra%C3%A3o-grig%C3%B3rio/"
              target="_blank"
              className="social-pill"
              id="linkedin"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/abraaogg"
              target="_blank"
              className="social-pill"
              id="github"
            >
              GITHUB
            </a>
            <a
              href="https://www.instagram.com/abraaogrigorio_/"
              target="_blank"
              className="social-pill"
              id="instagram"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
