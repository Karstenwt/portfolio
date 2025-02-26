import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Me Contacter</h1>
      <p>Envoyez-moi un message via ce formulaire ou cliquez sur le bouton ci-dessous pour m'écrire directement par e-mail.</p>

      
      <form action="mailto:karsten.walraet@gmail.com" method="POST" encType="text/plain">
        <input type="text" name="name" placeholder="Nom" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Votre message" required></textarea>
        <button type="submit" className="send-button">Envoyer</button>
      </form>

      
      <a href="mailto:karsten.walraet@gmail.com" className="email-button">
        Envoyer un email
      </a>
    </div>
  );
};

export default Contact;
