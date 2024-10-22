import React, { useState } from "react";
import "./Projects.css";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard";
import FilterButtons from "./FilterButtons";
import projects from "./ProjectsData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModalVisibility = (project = null) => {
    setModalOpen(!modalOpen);
    if (!modalOpen) {
      setSelectedProject(project);
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <FilterButtons
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => toggleModalVisibility(project)}
          />
        ))}
      </div>
      {modalOpen && (
        <Modal onClose={toggleModalVisibility} project={selectedProject} />
      )}
    </section>
  );
};

export default Projects;
