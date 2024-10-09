import React from 'react';
import './Skills.css';

const SkillCard = ({ skill }) => {
    return (
        <div className='skill'>
            <h3>{skill.name}</h3>
            <div className="icon">
                <img src={skill.icon} alt={`${skill.name} Icon`} />
            </div>
            <div className="progress">
                <div className="progress-bar" style={{ width: skill.progress }}></div>
            </div>
        </div>
    );
}

export default SkillCard