// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import ParticlesBackground from './Components/ParticlesBackground';
// import Particles, { ISourceOptions } from "react-tsparticles";

import './App.css';

function App() {
  
  return (
    <div className="App app-container">
    <Navbar/>
    <ParticlesBackground />
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Skills" element={<Skills/>} />

      </Routes>
    </Router>
    <Footer />
  
    
    </div>
  );
}

export default App;
