import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.scss";
import KarstenPhoto from "../../assets/images/Karsten.webp";
import sophiebluel from "../../assets/images/sophiebluel.png";
import ohmyfood from "../../assets/images/ohmyfood.png";

const projects = [
  {
    id: 1,
    title: "OhmyFood",
    description:
      "OhmyFood est une application web permettant de découvrir des menus de restaurants gastronomiques et de les précommander en ligne. Ce projet met l'accent sur l'animation des éléments de l'interface, offrant une expérience utilisateur fluide et immersive.",
    image: ohmyfood,
    github: "https://github.com/Karstenwt/OhmyFood",
    technologies: ["HTML5", "CSS3", "Sass", "Animations CSS"],
  },
  {
    id: 2,
    title: "Sophie Bluel",
    description:
      "Sophie Bluel est une application web permettant de gérer et d'afficher un portfolio d'architecte d'intérieur. L'objectif est de permettre à l'utilisateur d'explorer les projets réalisés, et à l'administrateur de modifier le contenu en se connectant à l’interface d’administration.",
    image: sophiebluel,
    github: "https://karstenwt.github.io/Sophie-Bluel/",
    technologies: ["JavaScript", "API REST", "CSS3", "JWT Auth"],
  },
];

const Home = () => {
  const ref = useRef(null);
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);

  return (
    <section className="home" ref={ref}>
      <div className="home-content">
        <motion.div
          className="home-text"
          style={{ y: textY }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>
            <span className="karsten-title">Karsten</span>
          </h1>
          <h2 className="frontend-title">
            Développeur <br /> Front-End
          </h2>
          <p>Passionné par la technologie et la création numérique.</p>
        </motion.div>

        <motion.div
          className="home-photo-container"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <img className="home-photo" src={KarstenPhoto} alt="Karsten" />
        </motion.div>
      </div>

      
      <section className="projects" id="projects-section">
        <h1 className="projects-title">Mes Projets</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir sur GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
