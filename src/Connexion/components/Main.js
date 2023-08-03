import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import imgConnexion from '../../media/img/fd_connexion.jpg'

export default function Main(){
    return(
        
        <main>


        {/*section contact*/}
        <section className="contact">
                <div className="gauche">
                    <img src={imgConnexion} alt="img_connexion "/>
                    </div>
                <div className="droite_form">
                    <h2>Connexion</h2>
                    <form method="POST" >
        <div className="content_form_connexion ">
        <div className='label_email'>
            <label name="email">Email:</label>
            <input type="text" placeholder='Entrez votre email...'/>
        </div>
        <div className='label_mdp'>
        <label name="mdp">Mot de passe :</label>
            <input type="password" placeholder='Entrez votre mot de passe ...'/>
        </div>
      

        <button type='submit'>Valider </button>
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