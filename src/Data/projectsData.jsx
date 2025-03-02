import ohmyfood from "../assets/images/ohmyfood.png";
import sophiebluel from "../assets/images/sophiebluel.png";

const projects = [
  {
    id: 1,
    title: "OhmyFood",
    description: "OhmyFood est une application web qui permet aux utilisateurs de découvrir des menus de restaurants gastronomiques et de les précommander en ligne. L'objectif est d'améliorer l'expérience client en réduisant le temps d'attente au restaurant grâce à une interface moderne et fluide.",
    image: ohmyfood,
    github: "https://github.com/Karstenwt/OhmyFood",
    technologies: ["HTML5", "CSS3", "Sass", "Animations CSS"],
  },
  {
    id: 2,
    title: "Sophie Bluel",
    description: "Sophie Bluel est une plateforme en ligne dédiée aux architectes d'intérieur. Elle permet aux professionnels de présenter leurs projets sous forme de portfolio interactif et aux clients potentiels de consulter les réalisations. L'application offre une gestion facile des projets via une API REST sécurisée avec authentification JWT.",
    image: sophiebluel,
    github: "https://karstenwt.github.io/Sophie-Bluel/",
    technologies: ["JavaScript", "API REST", "CSS3", "JWT Auth"],
  },

  
];

export default projects;
