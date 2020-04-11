import React from 'react';
import './NavBar.css';
import Logo from "./logo.svg";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-content-container">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <div className="ul-container">
          <div className="hamburger-menu">
            <div className="single-line"></div>
            <div className="single-line"></div>
            <div className="single-line"></div>
          </div>
          <ul>
            <li>Galería</li>
            <li>Juego</li>
            <li>Certificado</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar