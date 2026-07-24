import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Info */}
        <div className="footer-brand">
          <h3>ARIS LEE</h3>
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter ↗</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aris Lee. All rights reserved.</p>
        <button onClick={scrollToTop} className="back-to-top">
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;