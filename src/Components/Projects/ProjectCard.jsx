import React from "react";
import "./Projects.css";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" className="btn">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
