// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Podcast from './Components/Podcast';
import Blog from './Components/Blog'

import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Podcast" element={<Podcast/>} />
        <Route path="/Blog" element={<Blog/>} />

      </Routes>
    </Router>
  
    
    </div>
  );
}

export default App;
