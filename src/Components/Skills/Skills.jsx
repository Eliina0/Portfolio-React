import React from "react";
import "./SkillCard.jsx";
import "./Skills.css";
import SkillCard from "./SkillCard.jsx";
import htmlImg from "../Assets/html.png";
import cssImg from "../Assets/css.png";
import javascriptImg from "../Assets/js.webp";
import reactImg from "../Assets/react.png";
import javaImg from "../Assets/java.png";
import phpImg from "../Assets/php.png";

const skills = [
  {
    name: "HTML",
    icon: htmlImg,
    progress: "90%",
  },
  {
    name: "CSS",
    icon: cssImg,
    progress: "85%",
  },
  {
    name: "JavaScript",
    icon: javascriptImg,
    progress: "80%",
  },
  {
    name: "React",
    icon: reactImg,
    progress: "50%",
  },
  {
    name: "Java",
    icon: javaImg,
    progress: "50%",
  },
  {
    name: "PHP",
    icon: phpImg,
    progress: "50%",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
