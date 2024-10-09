import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import './App.css';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import ContactForm from './Components/Contact/ContactForm';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;