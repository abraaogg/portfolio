import React from "react";
import "../styles/skills.css";

function Skills() {
  const skills = [
    {
      id: 1,
      image: notesImg,
      title: "Notes",
      description: "Create and manage notes.",
      page: "",
    },
  ];
  return (
    <div className="skills">
      <div className="skills-container">
        <h2>SKILLS</h2>
        <div className="skill-img">
          {skills.map((skill) => (
            <div className="card" key={skill.id}>
              <img src={skill.image} alt={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
