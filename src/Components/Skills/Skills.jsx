import React from 'react';
import './SkillCard.jsx';
import './Skills.css';
import SkillCard from './SkillCard.jsx';

const skills = [
    {
        name: "HTML",
        icon: "./images/html.png",
        progress: "90%"
    },
    {
        name: "CSS",
        icon: "./images/css.png",
        progress: "85%"
    },
    {
        name: "JavaScript",
        icon: "./images/js.webp",
        progress: "80%"
    },
    {
        name: "React",
        icon: "./images/react.png",
        progress: "80%"
    },
    {
        name: "Java",
        icon: "./images/java.png",
        progress: "80%"
    },
    {
        name: "PHP",
        icon: "./images/php.png",
        progress: "80%"
    }
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
}

export default Skills