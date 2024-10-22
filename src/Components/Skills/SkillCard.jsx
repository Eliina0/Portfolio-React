import React from "react";
import PropTypes from "prop-types";
import "./Skills.css";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill">
      <h3>{skill.name}</h3>
      <div className="icon">
        <img src={skill.icon} alt={`${skill.name} Icon`} />
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: skill.progress }}></div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
  }).isRequired,
};
export default SkillCard;
