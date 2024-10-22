<<<<<<< HEAD
import React from 'react';
import './About.css';
import img from '../Assets/woman (1).png';
=======
import React from "react";
import "./About.css";
import img from "../Assets/imgg.jpg";
>>>>>>> fd5712f (Router)

const About = () => {
  return (
    <section className="about" id="about">
      <img src={img} alt="My image" />
      <div id="about-text">
        <h2>About me</h2>
        <p>
          Hi, I'm Elina Tota, a recent graduate with a Bachelor's degree in
          Informatics. I'm passionate about learning and excited to apply my
          skills in real-world projects.
        </p>
        <p>
          I'm eager to take on new challenges and explore opportunities where I
          can contribute and learn in equal measure. I'm excited to continue my
          journey in the tech world.
        </p>
      </div>
    </section>
  );
};

export default About;
