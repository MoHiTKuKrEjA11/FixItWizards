// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">FixItWizards</a>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          <li className="nav-item"><a className="nav-link" href="/service">Chat</a></li>
          <li className="nav-item"><a className="nav-link" href="/alumni">Connect with alumni</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
