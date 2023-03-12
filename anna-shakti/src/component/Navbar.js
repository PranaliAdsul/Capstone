import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About Us</Link></li>
        <li className="navbar-item"><Link to="/what-we-do">What We Do</Link></li>
        <li className="navbar-item"><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <div className="navbar-donate">
        <Link to="/donate" className="navbar-button">Donate</Link>
      </div>
    </nav>
  );
}

export default Navbar;
