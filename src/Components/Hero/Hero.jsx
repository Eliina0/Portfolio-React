import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <h1>Hello, I'm <span>Elina Tota</span></h1>
            <p>A new passionate web developer dedicated to creating responsive and user-friendly web applications.</p>
            <a href="#projects" className="btn">View My Work</a>
        </section>
    );
};

export default Hero;
