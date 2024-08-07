import './NavBar.css';

import logo_dark from '../Assets/logo-white.png'; // Corrected path
import logo_light from '../Assets/logo-black.png'; // Corrected path
import toggle_d from '../Assets/day.png'; // Corrected path
import toggle_l from '../Assets/night.png'; // Corrected path
import { useState } from 'react';

export function NavBar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={`navbar ${theme}`}>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />
      <div className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
        &#9776; {/* Unicode character for hamburger menu icon */}
      </div>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><a href="#PRODUCT">PRODUCT</a></li>
        <li><a href="#PROJECT">PROJECT</a></li>
        <li><a href="#RESOURCES">RESOURCES</a></li>
        <li><a href="#ABOUT">ABOUT</a></li>
        <li a href="#contact">CONTACT</li>
      </ul>
      <div className="btn">
        <button>Register Demo</button>
      </div>
      <img 
        onClick={toggle} 
        src={theme === 'light' ? toggle_l : toggle_d} 
        alt="Toggle theme" 
        className="tg-icon" 
        aria-label="Toggle theme"
      />
    </div>
  );
}
