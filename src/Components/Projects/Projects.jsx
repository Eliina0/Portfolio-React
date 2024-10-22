import React, { useEffect, useState } from "react";
import "./Projects.css";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard";
import toDoListImg from "../Assets/to-do-list.png";
import weatherAppImg from "../Assets/weather-app.png";
import itemListApp from "../Assets/item-list-app.png";
import cvAppImg from "../Assets/cv-app.png";
import restaurantAppImg from "../Assets/restaurant-app.png";
import clothingApp from "../Assets/clothing-app.png";
import FilterButtons from "./FilterButtons";

const projects = [
  {
    title: "Simple Todo List App",
    description:
      "A basic todo list application built using HTML, CSS, and JavaScript. Users can add, edit, and delete tasks.",
    image: toDoListImg,
    link: "https://github.com/Eliina0/To-do-list-project",
    category: "front-end",
    details:
      "This application features a user-friendly interface where users can manage their tasks efficiently. Implemented local storage to persist tasks between sessions and utilized JavaScript for DOM manipulation.",
  },
  {
    title: "Weather App",
    description:
      "A weather application built with HTML, CSS, and JavaScript, which fetches real-time weather data using the OpenWeather API.",
    image: weatherAppImg,
    link: "https://github.com/Eliina0/Weather-app",
    category: "front-end",
    details:
      "The app allows users to search for weather information by city. It includes features like temperature display in Celsius and Fahrenheit, dynamic background changes based on weather conditions, and error handling for invalid inputs.",
  },
  {
    title: "Item List App",
    description:
      "A full-stack application built with React and PHP that allows users to add items to a list, as well as delete multiple items at once.",
    image: itemListApp,
    link: "https://github.com/Eliina0/scandiwebProject",
    category: "full-stack",
    details:
      "This application utilizes a RESTful API for managing items and incorporates user authentication. It features a responsive design and implements state management using React hooks, ensuring a seamless user experience.",
  },
  {
    title: "CV Builder App",
    description:
      "A web application that allows users to create and customize their CVs. Built using React for the frontend and PHP for backend processing.",
    image: cvAppImg,
    link: "#",
    category: "full-stack",
    details:
      "The CV Builder App provides templates and customization options for users to create professional CVs. Users can download their CVs in PDF format and the application uses form validation to ensure completeness.",
  },
  {
    title: "BiteBuzz - Restaurant Reservation & Food Ordering App",
    description:
      "An app that allows users to reserve a table at a restaurant or order food for delivery. Built using React for the frontend and PHP for the backend.",
    image: restaurantAppImg,
    link: "#",
    category: "full-stack",
    details:
      "BiteBuzz includes features for searching restaurants, viewing menus, and placing orders. It also offers user authentication and a dashboard for restaurant owners to manage reservations and orders.",
  },
  {
    title: "StyleHub - Clothing & Accessories E-commerce App",
    description:
      "An e-commerce platform for buying clothes and accessories, built using React for the frontend and Express.js for the backend.",
    image: clothingApp,
    link: "#",
    category: "full-stack",
    details:
      "StyleHub provides a comprehensive shopping experience with product filtering, user reviews, and a secure checkout process. The app implements Redux for state management and includes payment integration for a seamless transaction experience.",
  },
];

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
