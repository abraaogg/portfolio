import React from "react";
import "../styles/skills.css";

function Skills() {
  const skills = [
    {
      id: 1,
      image: reactImg,
      title: "React",
    },
    {
      id: 2,
      image: nextJsImg,
      title: "Next.Js",
    },
    {
      id: 3,
      image: nodeJsImg,
      title: "Node.Js",
    },
    {
      id: 4,
      image: gsapImg,
      title: "GSAP",
    },
    {
      id: 5,
      image: cssImg,
      title: "CSS",
    },
    {
      id: 6,
      image: sqlImg,
      title: "SQL",
    },
  ];
  return (
    <div className="skills">
      <div className="skills-container">
        <h2>SKILLS</h2>
        <div className="skill-icons">
          {skills.map((skill) => (
            <div key={skill.id}>
              <img src={skill.image} alt={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
