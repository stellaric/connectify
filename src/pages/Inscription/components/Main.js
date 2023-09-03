import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/App.css';
import imgInscription from '../../../media/img/fd_inscription.jpg';
import '../../../styles/appMobile.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Importez les fonctions Firebase nécessaires
import { collection, addDoc } from 'firebase/firestore'; // Importez les fonctions Firebase Firestore nécessaires
import { auth, db } from '../../../services/firebase'; // Assurez-vous que vous avez configuré Firebase correctement dans votre projet

export default function Main() {
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('homme'); // Par défaut, homme
  const [motDePasse, setMotDePasse] = useState('');
  const [verificationMotDePasse, setVerificationMotDePasse] = useState('');
  const [erreurMotDePasse, setErreurMotDePasse] = useState('')
  const [erreurInscription, setErreurInscription] = useState('');

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifiez si les mots de passe correspondent
    if (motDePasse !== verificationMotDePasse) {
      setErreurInscription('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const authInstance = getAuth(); // Obtenez l'instance d'authentification Firebase

      // Utilisez la fonction de création d'utilisateur Firebase
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, motDePasse);

      // Mettez à jour le profil de l'utilisateur avec le nom et le prénom
      await updateProfile(userCredential.user, {
     
      });

      // Ajoutez les données de l'utilisateur dans Firestore
      const userDocRef = await addDoc(collection(db, 'users'), {
        nom,
        prenom,
        email,
        genre,
      });

      console.log('Document written with ID: ', userDocRef.id);

      // L'utilisateur est inscrit avec succès, redirigez-le vers la page de connexion
      navigate('/connexion');
    } catch (erreur) {
      // Gérer les erreurs ici
      console.error(erreur.message);
      setErreurInscription(erreur.message);
    }
  };

  return (
    <main>
      <section className="inscription">
        <div className="gauche">
          <img src={imgInscription} alt="img_inscription " />
        </div>
        <div className="droite_form">
          <h2>Inscription</h2>

          <form onSubmit={handleSubmit}>
            <div className="content_form_inscription">
              <div className="content_name">
                <div className="label_nom">
                  <label htmlFor="nom">Nom:</label>
                  <input
                    id="nom"
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Entrez votre nom..."
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
                    placeholder="Entrez votre prénom..."
                    required
                  />
                </div>
              </div>
              <div className="label_email">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email..."
                  required
                />
              </div>
              <div className="label_genre">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="radio"
                  value="homme"
                  id="homme"
                  checked={genre === 'homme'}
                  onChange={handleGenreChange}
                />
                <span name="homme">Homme</span>
                <input
                  type="radio"
                  value="femme"
                  id="femme"
                  checked={genre === 'femme'}
                  onChange={handleGenreChange}
                />
                <span name="femme">Femme</span>
              </div>
              <div className="label_mdp">
                <label htmlFor="mdp">Mot de passe :</label>
                <input
                  id="mdp"
                  type="password"
                  placeholder="Entrez votre mot de passe ..."
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  required
                />
              </div>
              <div className="label_mdp">
                <label htmlFor="mdp_vf">Vérification de mot de passe :</label>
                <input
                  id="mdp_vf"
                  type="password"
                  placeholder="Entrez votre mot de passe ..."
                  value={verificationMotDePasse}
                  onChange={(e) => setVerificationMotDePasse(e.target.value)}
                  required
                />

                {erreurMotDePasse && (
                  <span className="error-message">{erreurMotDePasse}</span>
                )}
              </div>
              <button type="submit">Valider</button>
            </div>
          </form>

          <div className="link">
            <p>Déjà Inscrit ? </p> <Link to={'../connexion'}>Connectez-vous</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
