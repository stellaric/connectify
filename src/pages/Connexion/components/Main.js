import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Utilisez useNavigate au lieu de useHistory
import '../../../styles/App.css';
import imgConnexion from '../../../media/img/fd_connexion.jpg';
import '../../../styles/appMobile.css';

export default function Main() {
    const [email, setEmail] = useState('');
    const [mot_de_passe, setMotDePasse] = useState('');
    const [erreurConnexion, setErreurConnexion] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Envoyez les données au serveur pour la connexion
    const donneesConnexion = {
      email,
      mot_de_passe,
    };

    try {
      const response = await fetch('/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donneesConnexion),
      });

      if (response.status === 200) {
        // Connexion réussie, redirigez l'utilisateur vers la page de profil
        // Vous pouvez utiliser history.push pour rediriger ici si vous utilisez react-router-dom
        console.log('Connexion réussie');
      } else {
        // Gérez les erreurs de connexion ici
        setErreurConnexion('Identifiants incorrects');
      }
    } catch (erreur) {
      console.error('Erreur lors de la connexion :', erreur);
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
            <label name="email">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Entrez votre email...'
              required
            />
          </div>
          <div className='label_mdp'>
            <label name="mdp">Mot de passe :</label>
            <input
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
