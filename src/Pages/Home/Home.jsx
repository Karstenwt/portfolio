
import { motion } from "framer-motion";
import "./Home.scss";
import KarstenPhoto from "../../assets/images/Karsten.webp";
import projects from "../../data/projectsData"; 
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1><span className="karsten-title">Karsten</span></h1>
          <h2 className="frontend-title">Développeur <br /> Front-End</h2>
          <p>Passionné par la technologie et la création numérique.</p>
        </motion.div>

        <motion.div
          className="home-photo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          
        >
          <img className="home-photo" src={KarstenPhoto} alt="Karsten" />
        </motion.div>
      </motion.div>

      <section className="projects" id="projects-section">
        <h1 className="projects-title">Mes Projets</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
