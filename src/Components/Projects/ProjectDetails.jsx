import React from "react";
import projects from "./ProjectsData";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  console.log(project);

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p>{project.details}</p>
      <a href={project.link} target="_blank" className="btn">
        View Project on GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;
