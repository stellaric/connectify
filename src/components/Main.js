import React, { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/appMobile.css";
import imgActualite from "../media/img/fd_actualite.jpg";
import imgQsn from "../media/img/fd_qsn.jpg";
import imgContact from "../media/img/fd_contact.jpg";

export default function Main() {


// fonction translate 

  // Tableau des traductions pour différentes langues
  const translations = {
    fr: "Bienvenue", // Français
    en: "Welcome", // Anglais
    es: "Bienvenido", // Espagnol
    de: "Willkommen", // Allemand
    gf: "ben vini", // Créole guyanais
    ht: "Byenvini", // Créole haïtien
    sen: "Akksil ak diam", // Wolof
    ukr: "дякую", // Ukrainien
    bgd: "স্বাগত", // Bengali
    zh: "欢迎光临", // Chinois (mandarin)
    dz: "مرحباً", // Arabe (algérien)
    he: "ברוך הבא", // Hébreu
    jp: "いらっしゃいませ", // Japonais
    kb: "Anṣuf yis-wen", // Kabyle
    az: "ⴰⵏⵚⵓⴼ ⵢⵉⵙ ⵡⴻⵏ", // Amazighe (Tamazight)
    mq: "Bienveni", // Créole martiniquais
    // Ajoutez autant de langues que nécessaire avec leur traduction correspondante
  };

  // Récupère les langues à partir des clés du tableau translations
  const languages = Object.keys(translations);

  // État pour stocker l'index de la langue actuelle
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  // Utilisation de useEffect pour changer automatiquement la langue
  useEffect(() => {
    // Crée un intervalle qui appelle la fonction changeLanguage toutes les 1000 millisecondes (1 seconde)
    const interval = setInterval(changeLanguage, 1000);
    // Nettoie l'intervalle lorsque le composant est démonté ou que l'index de la langue change
    return () => clearInterval(interval);
  }, [currentLanguageIndex]);

  // Fonction pour changer la langue actuelle
  const changeLanguage = () => {
    // Utilise le hook setCurrentLanguageIndex pour mettre à jour l'index de la langue actuelle
    setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };
  // Obtient la langue actuelle en utilisant l'index
  const currentLanguage = languages[currentLanguageIndex];
  return (

    <main>
      {/*section bienvenue*/}
      <section className="bienvenue">
        <h1>{translations[currentLanguage]}</h1>
        <p>
          "Harmonisez vos passions, partagez vos émotions avec Connectify !"
        </p>
      </section>

      {/*section actualite*/}
      <section className="actualite">
        <div className="gauche">
          <img src={imgActualite} alt="img_actualite" />
        </div>
        <div className="droite">
          <h2>Actualité</h2>
          <p>
            Le lieu où vous pouvez vous connecter avec vos amis, partager des
            moments spéciaux et explorer de nouvelles rencontres. Exprimez-vous
            à travers des photos, des vidéos et des messages, et découvrez le
            monde passionnant de la communauté Connectify. Rejoignez-nous dès
            maintenant et commencez à créer des liens, à inspirer et à être
            inspiré. Connectify est là pour vous aider à rester connecté et à
            célébrer les moments de la vie, ensemble.
          </p>
        </div>
      </section>

      {/*section qsn*/}
      <section className="qsn">
        <div className="gauche">
          <h2>Qui sommes nous ?</h2>
          <p>
            Chez Connectify, nous sommes une plateforme sociale dynamique et
            inclusive, dédiée à connecter les individus du monde entier. Notre
            objectif est de créer un espace numérique où chacun peut se sentir
            libre d'exprimer sa véritable identité, de partager ses passions et
            de tisser des liens authentiques.
          </p>
        </div>
        <div className="droite">
          <img src={imgQsn} alt="img_qsn" />
        </div>
      </section>

      {/*section contact*/}
      <section className="contact">
        <div className="gauche">
          <img src={imgContact} alt="img_contact" />
        </div>
        <div className="droite">
          <h2>Nous Contacter</h2>
          <form method="POST">
            <div className="content_form">
              <div className="label_email">
                <label name="email">Email:</label>
                <input type="text" placeholder="Entrez votre email..." />
              </div>
              <div className="label_sujet">
                <label name="sujet">Sujet:</label>
                <input type="text" placeholder="Sujet de votre  message.." />
              </div>
              <div className="label_message">
                <label name="message">Message:</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Ecrivez votre  message.."
                ></textarea>
              </div>

              <button type="submit">Valider </button>
            </div>
          </form>
        </div>
      </section>

      {/*section news*/}
      <section class="news">
        <div className="content_news">
          <h2>Newsletter</h2>
          <p>
            Inscrivez-vous à notre newsletter pour rester informé(e) et
            connecté(e) avec Connectify !
          </p>
        
          <input type="text" placeholder="Entrez votre email..." />
          <button type="submit">Valider</button>
         
        </div>
      </section>
    </main>
  );
}
