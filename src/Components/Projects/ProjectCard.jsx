import React from "react";
import "./Projects.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="btn-group">
        <a href={project.link} target="_blank" className="btn">
          View Project
        </a>
        <Link to={`/projects/${project.id}`} className="btn">
          Learn More
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default ProjectCard;
