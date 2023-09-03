import "../../../styles/App.css";
import "../../../styles/appMobile.css";
import React, { useState } from "react";
import imgContact from "../../../media/img/fd_contact.jpg";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [sujetError, setSujetError] = useState("");
  const [messageError, setMessageError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement de soumission par défaut

    // Réinitialiser les messages d'erreur
    setEmailError("");
    setSujetError("");
    setMessageError("");

    // Récupérer les valeurs des champs
    const email = e.target.email.value;
    const sujet = e.target.sujet.value;
    const message = e.target.message.value;

    // Regex pour validation d'e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse email valide");
      isValid = false;
    }

    if (sujet.trim() === "") {
      setSujetError("Veuillez entrer un sujet");
      isValid = false;
    }

    if (message.trim() === "") {
      setMessageError("Veuillez entrer un message");
      isValid = false;
    }

    if (isValid) {
      // Traitez ici votre logique d'envoi de message, si nécessaire

      // Ouvre la fenêtre modale une fois que le formulaire a été soumis avec succès
      setIsModalOpen(true);
    }
  };

  return (
    <main>
      {/*section contact*/}
      <section className="contact_pg">
        <div className="gauche">
          <img src={imgContact} alt="img_contact" />
        </div>

        <div className="droite">
          <h2>Nous Contacter</h2>

           <form method="GET" onSubmit={handleSubmit}>
            <div className="content_form">
              <div className={`label_email ${emailError ? 'error' : ''}`}>
                <label name="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Entrez votre email..."
                  required
                />
                {emailError && <span className="error-message">{emailError}</span>}
              </div>
              <div className={`label_sujet ${sujetError ? 'error' : ''}`}>
                <label name="sujet">Sujet:</label>
                <input
                  type="text"
                  name="sujet"
                  placeholder="Sujet de votre  message.."
                  required
                />
                {sujetError && <span className="error-message">{sujetError}</span>}
              </div>
              <div className={`label_message ${messageError ? 'error' : ''}`}>
                <label name="message">Message:</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Ecrivez votre  message.."
                  required
                ></textarea>
                {messageError && <span className="error-message">{messageError}</span>}
              </div>

              <button type="submit">Valider </button>
            </div>
          </form>
        </div>
      </section>

      {/* Fenêtre modale */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h3>Message envoyé</h3>
              <p>Votre message a été envoyé au service client Connectify.</p>
              <button onClick={() => setIsModalOpen(false)}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
