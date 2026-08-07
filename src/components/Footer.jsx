import React from "react";
import "../styles/footer.css";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Info */}
        <div className="footer-brand">
          <h3>ABRAÃO GRIGÓRIO</h3>
          <p>Web Developer & Designer</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>NAVIGATION</h4>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-col">
            <h4>CONNECT</h4>
            <a
              href="https://www.linkedin.com/in/abra%C3%A3o-grig%C3%B3rio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <GoArrowUpRight />
            </a>
            <a
              href="https://github.com/abraaogg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <GoArrowUpRight />
            </a>
            <a
              href="https://www.instagram.com/abraaogrigorio_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abraão Grigório. All rights reserved.</p>
        <button onClick={scrollToTop} className="back-to-top">
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
