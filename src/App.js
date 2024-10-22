import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import ContactForm from "./Components/Contact/ContactForm";
import ToTopBtn from "./Components/ToTopBtn/ToTopBtn";
import MyEvents from "./Components/Events/MyEvents";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      {/*<MyEvents />*/}
      <ToTopBtn />
    </div>
  );
};

export default App;
