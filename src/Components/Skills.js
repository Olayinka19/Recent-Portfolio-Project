import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <div>
    
    
    <section className="skills">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>
            <span>HTML/CSS</span>
            <div className="skills-bar html"></div>
          </li>
          <li>
            <span>JavaScript</span>
            <div className="skills-bar js"></div>
          </li>
          <li>
            <span>Python</span>
            <div className="skills-bar js"></div>
          </li>
          <li>
            <span>Node.js</span>
            <div className="skills-bar js"></div>
          </li>
          <li>
            <span>React</span>
            <div className="skills-bar js"></div>
          </li>
          <li>
            <span>Postgres SQL</span>
            <div className="skills-bar js"></div>
          </li>
          <li>
            <span>Firebase</span>
            <div className="skills-bar js"></div>
          </li>
          {/* Add more skills */}
        </ul>
      </section>
        {/* ... Contact and Footer sections ... */}
        
    </div>
  )
}

export default Skills