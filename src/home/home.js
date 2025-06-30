import React from 'react';
import './home.css';
// import Photo from "../assets/photo.jpeg";

const PortfolioHomepage = () => {
  const projects = [
    {
      title: "Mobile And Laptop Services and Sales Website",
      description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
      technologies: ["React.js", "MySql"],
      link: "https://github.com/SanthoshKumarB4/Website"
    },
    {
      title: "Xyloite Technoogy Company Website",
      description: "A productivity application for managing daily tasks with drag-and-drop functionality.",
      technologies: ["React.js"],
      link: "https://github.com/SanthosB14/santhosh"
    },
  ];

  const tools = [
    { name: "HTML", icon: "html-logo" },
    { name: "CSS", icon: "css-logo" },
    { name: "JavaScript", icon: "js-logo" },
    { name: "React.js", icon: "react-logo" },
    { name: "Angular 18", icon: "angular-logo" },
    { name: "GitHub", icon: "github-logo" },
  ];

  return (
    <div className="portfolio-homepage">
      
      <header className="header">
        <div className="header-content">
          <div className="header-image">
            {/* <img 
              src={Photo}
              className="profile-image" alt="Description of your image" 
            />
             */}
          </div>
          <div className="header-text">
            <h2>HI, I'm</h2>
            <h1>SANTHOSH KUMAR</h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
      </header>

      {/* Tools Section */}
      <section id="tools" className="tools-section">
        <div className="container">
          <div className="section-content">
            <div className="section-text">
              <h2>Tools I Specialize In</h2>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <div className={`tool-icon ${tool.icon}`}></div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2>Work Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Xylotie Technology Private Limited</h3>
              <div className="experience-duration">Internship [September 2024 – February 2025]</div>
            </div>
            <div className="experience-body">
              <div className="position">
                <i className="fas fa-briefcase"></i>
                <span>Frontend Developer Intern</span>
              </div>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="experience-details">
                <ul>
                  <li>Developed real-time websites as part of the internship, contributing to frontend development</li>
                  <li>Collaborated with team members to design, develop, and deploy projects using React.js</li>
                  <li>Gained hands-on experience with modern web development practices and tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <h3>Bachelor of Information Technology</h3>
                <div className="education-duration">2022 - 2025</div>
              </div>
              <div className="education-body">
                <div className="institution">
                  <i className="fas fa-university"></i>
                  <span>Sri Ramakrishna Mission Vidyalaya College of Arts and Science</span>
                </div>
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="education-details">
                  <p>Specialized in Web Development</p>
                  <p>GPA: 7/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Email: ss0203397@gmail.com</p>
          <p>Phone: (91)+9342948977</p>
          <div className="social-links">
            <a href="https://github.com/SanthoshKumarB4" className="social-icon">GitHub</a>
            <a href="https://www.linkedin.com/in/santhosh-kumar-514ba1285/" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHomepage;