import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {/* <li><Link to="aboutme" smooth={true} duration={500} spy={true} offset={-80}>About Me</Link></li> */}
        {/* <li><Link to="skills" smooth={true} duration={500} spy={true} offset={-80}>Skills</Link></li> */}
        {/* <li><Link to="project" smooth={true} duration={500} spy={true} offset={-80}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-80}>Contact</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
