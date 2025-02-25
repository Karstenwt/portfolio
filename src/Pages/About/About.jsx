import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="about-title">À propos de moi</h1>
        <motion.p
          className="about-text"
          whileHover={{ scale: 1.02, color: "#00eaff" }}
          transition={{ duration: 0.3 }}
        >
          Développeur front-end, je conçois des interfaces modernes et optimisées, 
          en mettant l'accent sur la fluidité et l'expérience utilisateur.
        </motion.p>
        <motion.p
          className="about-text"
          whileHover={{ scale: 1.02, color: "#00eaff" }}
          transition={{ duration: 0.3 }}
        >
          Formé en intégration web et spécialisé en React, j’ai réalisé plusieurs 
          projets mettant en avant mes compétences en développement d’interfaces interactives 
          et performantes.
        </motion.p>
        <motion.p
          className="about-text"
          whileHover={{ scale: 1.02, color: "#00eaff" }}
          transition={{ duration: 0.3 }}
        >
          J’accorde une importance particulière à l’optimisation, à l’accessibilité et à 
          la performance, pour proposer des solutions efficaces et adaptées aux besoins.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
