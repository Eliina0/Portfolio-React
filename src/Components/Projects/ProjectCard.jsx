import React from 'react';
import './Projects.css';

const ProjectCard = ( {project} ) => {
  return (
    <div className='project-card'>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{project.details}</p>
        <a href={project.link} target="_blank" className='btn'>View Project</a>
    </div>
  )
}

export default ProjectCard