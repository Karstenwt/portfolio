import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-kw">KW</Link> 
      </div>
      <ul className="navbar-menu">
        <li>
          {location.pathname === "/" ? (
            <a href="#projects-section" onClick={scrollToProjects}>Projets</a>
          ) : (
            <Link to="/">Projets</Link>
          )}
        </li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
