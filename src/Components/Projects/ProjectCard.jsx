import React from 'react';
import './Projects.css';

const ProjectCard = ( {project} ) => {
  return (
    <div className='project-card'>
        <img src={ProjectCard.image} alt={ProjectCard.title} />
        <h3>{ProjectCard.title}</h3>
        <p>{ProjectCard.description}</p>
        <p>{project.details}</p>
        <a href={project.link} target="_blank" className='btn'>View Project</a>
    </div>
  )
}

export default ProjectCard