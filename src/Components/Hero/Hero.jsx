import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1729533880594.json";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>
          Hello, I'm <span>Elina Tota</span>
        </h1>
        <p>
          A new passionate web developer dedicated to creating responsive and
          user-friendly web applications.
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
      <div className="hero-animation">
        <Lottie
          animationData={animationData}
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </section>
  );
};

export default Hero;
