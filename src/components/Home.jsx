import "../styles/home.css";
import { useRef } from "react";

import { FaGithub, FaFileAlt } from "react-icons/fa";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Home() {
  const homeRef = useRef();

useGSAP((self) => {
  ScrollTrigger.create({
    trigger: ".home-content",
    start: "top 80%",
    onEnter: () => {
      gsap.from(self.selector(".home-content > *"), { // Using > * lets GSAP treat each child separately
        opacity: 0,
        y: 10,
        filter: "blur(8px)",
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "filter",
      });
    },
    onEnterBack: () => {
      gsap.from(self.selector(".home-content > *"), {
        opacity: 0,
        y: 10,
        filter: "blur(8px)",
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "filter",
      });
    },
  });
}, { scope: homeRef });

  return (
    <div ref={homeRef} className="home" id="home">
      <div className="home-content">
        <h1>ABRAÃO GRIGÓRIO</h1>

        <p>
          Transforming ideas into modern, responsive, and interactive web
          experiences.
        </p>

        <div className="button-group">
          <a
            href="https://github.com/abraaogg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.html`} // This is a Vite environment value
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
