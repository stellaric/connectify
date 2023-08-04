import React from 'react';
import '../../App.css';
import '../../appMobile.css'
import { Link } from 'react-router-dom';

import imgInscription from '../../media/img/fd_inscription.jpg'

export default function Main(){
    return(
        <main>


        {/*section contact*/}
        <section className="inscription">
                <div className="gauche">
                    <img src={imgInscription} alt="img_inscription "/>
                    </div>
                    <div className="droite_form">
                    <h2>Inscription</h2>
                    <form method="POST" >

        <div className="content_form_inscription">
        <div className='content_name'>

            <div className='label_nom'>
            <label name="nom">Nom:</label>
            <input type="text" placeholder='Entrez votre nom...' required/>      
</div>
<div className="label_prenom">
            <label name="nom">Prénom:</label>
            <input type="text" placeholder='Entrez votre prénom...'required/>
            </div>
        </div>
        <div className='label_email'>
            <label name="email">Email:</label>
            <input type="text" placeholder='Entrez votre email...' required/>
        </div>
        <div className="label_genre">
        <label name="genre">Genre:</label>
       
            <input type="radio"  name="genre" value="male" id='male' />
            <span name="homme">Homme</span>
    
            <input type="radio"  name="genre"  value="female" id='female' />
            <span name="femme">Femme</span>
           
        </div>
        <div className='label_mdp'>
        <label name="mdp">Mot de passe :</label>
            <input type="password" placeholder='Entrez votre mot de passe ...' required/>
        </div>
        <div className='label_mdp'>
        <label name="mdp_vf">Vérification de mot de passe :</label>
            <input type="password" placeholder='Entrez votre mot de passe ...' required/>
        </div>

        <button type='submit'>Valider </button>
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