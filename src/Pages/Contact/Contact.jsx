import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Me Contacter</h1>
        <p className="contact-description">
          Une question, une collaboration ou simplement envie d’échanger ?
          Envoyez-moi un message et je vous répondrai dès que possible !
        </p>

        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Votre email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Votre message..." required></textarea>
          </div>

          <button type="submit" className="contact-btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
