import "./NavBars.css";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useRef } from "react";

export function NavBars() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <section>
        <header>
          <h3 className="logo">LOGO</h3>
          <nav ref={navRef}>
            <ul>
              <Link to="/product">
                <li>
                  <a href="/#">PRODUCT</a>
                </li>
              </Link>
              <Link to="/project">
                <li>
                  <a href="/#">PROJECT</a>
                </li>
              </Link>
              <li className="Sub-menu">
                <a href="/#">RESOURCES</a>
                <ul>
                  <li>
                    <a href="#">Article</a>
                  </li>
                  <li>
                    <a href="#">Unreal Web</a>
                  </li>
                </ul>
              </li>
              <Link to="/about">
                <li>
                  <a href="/#">ABOUT</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a href="/#">CONTACT</a>
                </li>
              </Link>
            </ul>
            <div></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <div className="side">
           <Link to="/demo"> <button className="buttonbook border border-light">
              Book Demo
            </button></Link>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </div>
        </header>
      </section>
    </>
  );
}
