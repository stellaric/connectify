import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/App.css';
import imgConnexion from '../../../media/img/fd_connexion.jpg';
import '../../../styles/appMobile.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importez les fonctions Firebase nécessaires
import { auth } from '../../../services/firebase'; // Assurez-vous que vous avez configuré Firebase correctement dans votre projet

export default function Main() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [mot_de_passe, setMotDePasse] = useState('');
  const [erreurConnexion, setErreurConnexion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authInstance = getAuth(); // Obtenez l'instance d'authentification Firebase

      // Utilisez la fonction de connexion Firebase
      await signInWithEmailAndPassword(authInstance, email, mot_de_passe);

      // L'utilisateur est connecté avec succès, redirigez-le vers la page de profil
      navigate('/profil');
    } catch (erreur) {
      // Gérer les erreurs ici
      console.error(erreur.message);
      setErreurConnexion(erreur.message);
    }
  };

  return (
    <main>
      <section className="connexion">
        <div className="gauche">
          <img src={imgConnexion} alt="img_connexion " />
        </div>
        <div className="droite_form">
          <h2>Connexion</h2>

          <form onSubmit={handleSubmit}>
            <div className="content_form_connexion">
              <div className='label_email'>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Entrez votre email...'
                  required
                />
              </div>
              <div className='label_mdp'>
                <label htmlFor="mdp">Mot de passe :</label>
                <input
                  id="mdp"
                  type="password"
                  value={mot_de_passe}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  placeholder='Entrez votre mot de passe ...'
                  required
                />
              </div>
              {erreurConnexion && <span className="error-message">{erreurConnexion}</span>}
              <button type='submit'>Se Connecter</button>
            </div>
          </form>

          <div className="link">
            <p>Pas de compte ? </p> <Link to={'../inscription'}>Inscrivez-vous</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
