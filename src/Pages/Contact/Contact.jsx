import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Me Contacter</h1>
      <p>Vous pouvez m'envoyer un e-mail en cliquant sur le bouton ci-dessous.</p>
      
      <a href="mailto:karsten.walraet@gmail.com" className="email-button">
        Écrire ici
      </a>
    </div>
  );
};

export default Contact;
