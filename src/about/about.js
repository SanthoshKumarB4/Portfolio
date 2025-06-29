import React from 'react';
import './about.css';

const AboutPage = () => {
  const skills = [
    { name: "React.js" },
    { name: "JavaScript"},
    { name: "HTML5/CSS3" },
    { name: "Angular"},
    { name: "ERPNext"},
    { name: "Git/GitHub"},
    { name: "Responsive Design" },
    { name: "UI/UX Principles"}
  ];

  const projects = [
    {
      title: "Xyloite Technologies Company Website",
      description: "Built and maintained the company website in React.js with a focus on responsiveness and performance.",
      responsibilities: [
        "Developed responsive UI components using React hooks",
        "Optimized page load performance (reduced load time by 40%)",
        "Implemented SEO best practices",
        "Integrated with backend APIs"
      ],
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    },
    {
      title: "Matrimony Website",
      description: "Built a responsive matrimonial site using React.js with profiles, filters, and secure login.",
      responsibilities: [
        "Developed user profile management system",
        "Implemented advanced search filters",
        "Created secure authentication flow",
        "Optimized for mobile devices"
      ],
      technologies: ["React.js", "Firebase", "Context API", "CSS Modules"]
    },
    {
      title: "Mobile & Laptop Services & Sales",
      description: "Built an e-commerce portal in React.js with admin panel and payment integration for device sales/services.",
      responsibilities: [
        "Developed product catalog and shopping cart",
        "Integrated payment gateway (Stripe)",
        "Built admin dashboard for inventory management",
        "Implemented user review system"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "Stripe API"]
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Me</h1>
          <p className="about-hero-subtitle">Frontend Developer with passion for building beautiful, functional web experiences</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <div className="about-section-container">
          <div className="about-intro-content">
            <div className="about-intro-text">
              <h2 className="about-section-title">Hello, I'm Santhosh Kumar</h2>
              <p className="about-text">
                I'm a frontend developer specializing in React.js with  6 months of experience building modern web applications.
                I have a strong foundation in JavaScript and a keen eye for design, allowing me to create applications that are
                both technically robust and visually appealing.
              </p>
              <p className="about-text">
                My approach combines technical expertise with user-centered design principles to deliver solutions that meet
                both business requirements and user needs. I'm passionate about writing clean, maintainable code and staying
                up-to-date with the latest web technologies.
              </p>
            </div>
            <div className="about-skills-section">
              <h3 className="about-skills-title">My Skills</h3>
              <div className="about-skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="about-skill-item">
                    <span className="about-skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="about-projects-section">
        <div className="about-section-container">
          <h2 className="about-section-title">My Key Projects</h2>
          <div className="about-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="about-project-card">
                <h3 className="about-project-title">{project.title}</h3>
                <p className="about-project-description">{project.description}</p>
                
                <div className="about-project-responsibilities">
                  <h4 className="about-subtitle">Key Responsibilities:</h4>
                  <ul className="about-responsibilities-list">
                    {project.responsibilities.map((item, i) => (
                      <li key={i} className="about-responsibility-item">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="about-project-technologies">
                  <h4 className="about-subtitle">Technologies Used:</h4>
                  <div className="about-tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="about-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy-section">
        <div className="about-section-container">
          <h2 className="about-section-title">My Development Philosophy</h2>
          <div className="about-philosophy-grid">
            <div className="about-philosophy-card">
              <div className="about-philosophy-icon">🚀</div>
              <h3 className="about-philosophy-title">Performance First</h3>
              <p className="about-philosophy-text">
                I prioritize fast, efficient code that delivers smooth user experiences.
                Every millisecond counts in today's web.
              </p>
            </div>
            <div className="about-philosophy-card">
              <div className="about-philosophy-icon">✨</div>
              <h3 className="about-philosophy-title">Clean Design</h3>
              <p className="about-philosophy-text">
                I believe in intuitive, aesthetically pleasing interfaces that enhance
                usability without unnecessary complexity.
              </p>
            </div>
            <div className="about-philosophy-card">
              <div className="about-philosophy-icon">🧩</div>
              <h3 className="about-philosophy-title">Modular Code</h3>
              <p className="about-philosophy-text">
                My components are built for reusability and maintainability, following
                best practices and design patterns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;