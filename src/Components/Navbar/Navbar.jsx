import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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
