
import React, { useState ,useEffect} from 'react';

import '../../../styles/App.css';
import '../../../styles/appMobile.css'
import { Link, useNavigate } from 'react-router-dom';

import imgInscription from '../../../media/img/fd_inscription.jpg'


export default function Main(){

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('homme'); // Par défaut, homme
  const [motDePasse, setMotDePasse] = useState('');
  const [verificationMotDePasse, setVerificationMotDePasse] = useState('');
  const [erreurMotDePasse, setErreurMotDePasse] = useState('');

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Assurez-vous que les mots de passe correspondent
    if (motDePasse !== verificationMotDePasse) {
      setErreurMotDePasse('Les mots de passe ne correspondent pas');
      return;
    } else {
      setErreurMotDePasse('');
    }

    // Envoyez les données au serveur pour l'inscription
    const donneesInscription = {
      nom,
      prenom,
      email,
      genre,
      motDePasse,
    };


  try {
    const response = await fetch('/inscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donneesInscription),
    });

    if (response.status === 200) {
      // Inscription réussie, redirigez l'utilisateur vers la page de connexion
      // Vous pouvez utiliser history.push pour rediriger ici si vous utilisez react-router-dom
      console.log('Inscription réussie');
    } else {
      // Gérez les erreurs d'inscription ici
      console.error('Échec de l\'inscription');
    }
  } catch (erreur) {
    console.error('Erreur lors de l\'inscription :', erreur);
  }
};

  

    return(
        <main>


        {/*section contact*/}
        <section className="inscription">
                <div className="gauche">
                    <img src={imgInscription} alt="img_inscription "/>
                    </div>
                    <div className="droite_form">
                    <h2>Inscription</h2>


                  <form onSubmit={handleSubmit}>
        <div className="content_form_inscription">
          <div className='content_name'>
            <div className='label_nom'>
              <label htmlFor="nom">Nom:</label>
              <input
                id="nom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder='Entrez votre nom...'
                required
              />
            </div>
            <div className="label_prenom">
              <label htmlFor="prenom">Prénom:</label>
              <input
                id="prenom"
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder='Entrez votre prénom...'
                required
              />
            </div>
          </div>
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
          <div className="label_genre">
            <label htmlFor="genre">Genre:</label>
            <input
              type="radio"
              value="homme"
              id='homme'
              checked={genre === 'homme'}
              onChange={handleGenreChange}
            />
            <span name="homme">Homme</span>
            <input
              type="radio"
              value="femme"
              id='femme'
              checked={genre === 'femme'}
              onChange={handleGenreChange}
            />
            <span name="femme">Femme</span>
          </div>
          <div className='label_mdp'>
            <label htmlFor="mdp">Mot de passe :</label>
            <input
              id="mdp"
              type="password"
              placeholder='Entrez votre mot de passe ...'
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
            />
          </div>
          <div className='label_mdp'>
            <label htmlFor="mdp_vf">Vérification de mot de passe :</label>
            <input
              id="mdp_vf"
              type="password"
              placeholder='Entrez votre mot de passe ...'
              value={verificationMotDePasse}
              onChange={(e) => setVerificationMotDePasse(e.target.value)}
              required
            />
            {erreurMotDePasse && <span className="error-message">{erreurMotDePasse}</span>}
          </div>
          <button type='submit'>Valider</button>
        </div>
      </form>

        <div className="link">
                   <p>Déja Inscrit ? </p> <Link to={'../connexion'}>Connectez-vous</Link>
                   </div>
                   </div>
            </section>

  
        </main>
    );
}
