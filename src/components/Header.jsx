import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (id) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${id}`,
      offsetY: 80, // prevents the fixed header from covering the title
    },
    ease: "power2.inOut",
  });

  setMenuOpen(false);
};

function Header() {
  const navItems = [
    { name: "HOME", id: "home" },
    { name: "PROJECTS", id: "projects" },
    { name: "TECH", id: "tech-stack" },
    { name: "ABOUT", id: "about" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize); // Whenever the window is resized, run handleResize.

    return () => {
      window.removeEventListener("resize", handleResize); // When this component (Header.jsx) is removed, stop listening for resize events.
    };
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        ARIS <span>LEE</span>
      </a>
      <button className="menuIcon" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={menuOpen ? "navbar open" : "navbar"}>
        {navItems.map((item) => {
          return (
            // for each Item inside navItems, return one <a>
            // key → helps React track list items.
            // href → tells the browser where to scroll.
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
