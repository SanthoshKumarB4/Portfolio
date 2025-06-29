import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import './header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Center - Navigation Options */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About Me</Link>
          
          {/* Only show these scroll links on home page */}
          {isHomePage && (
            <>
              <ScrollLink 
                to="education" 
                className="nav-link" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={closeMenu}
              >
                Education
              </ScrollLink>
              <ScrollLink 
                to="experience" 
                className="nav-link" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={closeMenu}
              >
                Work Experience
              </ScrollLink>
              <ScrollLink 
                to="projects" 
                className="nav-link" 
                spy={true} 
                smooth={true} 
                duration={500}
                onClick={closeMenu}
              >
                View Projects
              </ScrollLink>
            </>
          )}
        </div>

        {/* Right side - Icons */}
        <div className="navbar-icons">
          <button onClick={toggleMenu} className="mobile-menu-btn">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Overlay when menu is open */}
        {isOpen && <div className="mobile-menu-overlay" onClick={closeMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;