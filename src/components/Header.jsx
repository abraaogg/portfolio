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
};

function Header() {
  const navItems = [
    { name: "HOME", id: "home" },
    { name: "PROJECTS", id: "projects" },
    { name: "TECH", id: "tech-stack" },
    { name: "ABOUT", id: "about" },
  ];

  return (
    <header className="header">
      <a
        href="#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
      >
        ABRAÃO
        <span className="logo-dot"></span>
        GRIGÓRIO
      </a>

      <nav className="navbar">
        {navItems.map((item) => (
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
        ))}
      </nav>
    </header>
  );
}

export default Header;