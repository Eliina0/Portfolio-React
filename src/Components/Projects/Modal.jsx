import React from "react";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={project.image} alt={project.title} className="modal-img" />
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-category">Category : {project.category}</p>
        <p className="modal-description">{project.description}</p>
        <p className="modal-details">{project.details}</p>
        <a href={project.link} className="btn" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Modal;
