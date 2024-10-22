import React from "react";
import "./Projects.css";

const FilterButtons = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="filter-buttons">
      <button
        className={`button ${selectedCategory === "All" ? "active" : ""}`}
        onClick={() => setSelectedCategory("All")}
      >
        All
      </button>
      <button
        className={`button ${
          selectedCategory === "full-stack" ? "active" : ""
        }`}
        onClick={() => setSelectedCategory("full-stack")}
      >
        Full Stack
      </button>
      <button
        className={`button ${selectedCategory === "front-end" ? "active" : ""}`}
        onClick={() => setSelectedCategory("front-end")}
      >
        Front End
      </button>
    </div>
  );
};

export default FilterButtons;