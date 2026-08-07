import React, { useRef } from "react";
import "../styles/about.css";
import profileImg from "../imgs/profile.jpeg";
import { GoArrowUpRight } from "react-icons/go";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function About() {
  const aboutRef = useRef();

  useGSAP(
    (self) => {
      gsap.to(self.selector(".profile-image"), {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: aboutRef }
  );

  return (
    <div ref={aboutRef} className="about" id="about">
      <div className="about-container">
        <h2>ABOUT ABRAÃO</h2>

        <img
          className="profile-image"
          src={profileImg}
          alt="Profile Picture"
        />

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
              rel="noopener noreferrer"
              className="social-pill"
              id="linkedin"
            >
              LINKEDIN
            </a>

            <a
              href="https://github.com/abraaogg"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              id="github"
            >
              GITHUB
            </a>

            <a
              href="https://www.instagram.com/abraaogrigorio_/"
              target="_blank"
              rel="noopener noreferrer"
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