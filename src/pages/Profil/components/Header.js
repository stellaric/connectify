import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Importez les fonctions Firebase nécessaires
import { auth } from '../../../services/firebase'; // Assurez-vous que vous avez configuré Firebase correctement dans votre projet
import "../../../styles/App.css";
import "../../../styles/appMobile.css";

import imgAvatar from "../../../media/img/avatar.png";

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    // Utilisez onAuthStateChanged pour écouter les changements d'état d'authentification
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        setUser(user);
      } else {
        // L'utilisateur n'est pas connecté, vous pouvez le rediriger ou gérer cela ici
      }
    });

    // Nettoyez l'écouteur lorsque le composant est démonté
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <header className="header_profil">
      <nav className="navbar_profil">
        <h1>Connectify</h1>
        <div className="onglets">
          <Link to={"/profil"}>Profil</Link>
          <Link to={"../contact"}>Contact</Link>
          <Link to={"../connexion"}>Déconnexion</Link>
        </div>

        {/* Menu mobile */}
        <span className="burgerMenu" onClick={openNav}>
          ☰{" "}
        </span>

        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <div className="overlay-content">
            <h1>Connectify</h1>
            <Link to={"/profil"}>Profil</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"../connexion"}>Déconnexion</Link>
          </div>
        </div>
      </nav>

      <div className="banniere">
        <div className="card_profil">
          <img id="img" src={imgAvatar} alt="avatar" />
          {user ? (
            <div>
              <p>{user.displayName}</p>
              {/* Vous devez extraire le nom et le prénom de l'objet user */}
              <p> {user.prenom}</p>
              {/* Affichez d'autres informations utilisateur ici */}
            </div>
          ) : (
            <p>Vous n'êtes pas connecté.</p>
           
          )}
         
        </div>
      
      </div>
    </header>
  );
}
