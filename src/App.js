import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer';
import About from './Components/About/About';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App;