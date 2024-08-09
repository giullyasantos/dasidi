import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="menu-button">
        ☰
      </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
        <li><Link to="/gifts" onClick={toggleMenu}>GIFTS</Link></li>
        <li><Link to="/location" onClick={toggleMenu}>LOCATION</Link></li>
        <li><Link to="/ourstory" onClick={toggleMenu}>OUR STORY</Link></li>
        <li><Link to="/rsvp" onClick={toggleMenu}>RSVP</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;