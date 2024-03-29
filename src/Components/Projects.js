// ... Previous code ...
import React, {useState} from 'react';
import project3 from '../assets/project3.png'

const projectsData = [
  {
    title: 'Ola-Pawster Capstone Project',
    image: 'https://ola-pawster.netlify.app/',
    
    description: [
      "Ola-Pawster Capstone Project serves as a prominent demonstration of my adept SQL skills in crafting a sophisticated database-driven solution that seamlessly connects pets, users, and shelter homes within an intuitive web platform.",
      "Formulated a well-structured schema that effectively organizes and preserves pivotal data concerning users, pets, and shelter homes.",
      "Led and managed small-sized projects and components of larger projects/programs through their entire lifecycle.",
    ],
  
    githubLink: 'https://github.com/Olayinka19/Pawster-capstone-project',
  },
  {
    title: 'Pursuit Connect',
    image: '',
    description: [
      "Optimized PostgreSQL databases for dependable data storage, rapid retrieval, and secure handling of sensitive information.",
      "Designed captivating user interfaces with JavaScript, React, ensuring seamless adaptability across devices.",
      "Built a robust server-side foundation with Express for efficient data flow and rapid API development.",
    ],
    githubLink: 'https://github.com/Olayinka19',
  },
];
const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const nextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projectsData.length);
  };

    return (
      <div className="portfolio">
     
        <section className="projects">
        {/* <br /> */}
        <br />
        <br />
          <h2>My Projects</h2>
          <div className="project-list">
            <div className="project">
              <h3>Ahead-Shopping</h3>
              <p>Description of Project 1.</p>
              <a href="https://ahead-store.netlify.app/">View Project</a>
              <div className="project-image" style={{ backgroundImage: "url('/project3.png')" }}></div>
            </div>
            <div className="project">
              <h3>Ola-Pawster</h3>
              <p>Description of Project 2.</p>
              <a href="https://ola-pawster.netlify.app/">View Project</a>
              <div className="project-image" style={{ backgroundImage: "url('/project2.jpg')" }}></div>
            </div>
            {/* Add more project divs as needed */}
          </div>
        </section>
        <section className="video-section">
  <h2>Portfolio Highlight Reel</h2>
  <iframe
    width="360"
    height="315"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="Portfolio Highlight Reel"
    frameborder="0"
    allowfullscreen
  ></iframe>
</section>
        <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="featured-project">
          <div className="project-image" style={{ backgroundImage: "url('/featured-project.jpg')" }}></div>
          <div className="project-details">
            <h3>Featured Project Title</h3>
            <p>Description of the featured project.</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>
        
      {/* <nav className="navigation">
        <ul>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('events')}>Events</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
          <li onClick={() => scrollToSection('blog')}>Blog</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav> */}
      </div>
    );
  };
  
  export default Projects;
  