import "../styles/header.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const scrollToSection = (id) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${id}`,
      offsetY: 80,
    },
    ease: "power2.inOut",
  });
};

function Header() {
  const headerRef = useRef();

  useGSAP(
    (self) => {
      gsap.fromTo(
        self.selector(".logo, .navbar a"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    },
    { scope: headerRef },
  );

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "PROJECTS", id: "projects" },
    { name: "TECH", id: "tech-stack" },
    { name: "ABOUT", id: "about" },
  ];

  return (
    <header ref={headerRef} className="header">
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
