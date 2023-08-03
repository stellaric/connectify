import React from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';

export default function Header() {
    return ( 
     <header className="header_connexion">
        <nav className="navbar_deux">
            <h1 >Connectify</h1>
            <div className="onglets">
                <Link to={'/'}>Accueil</Link>
                <Link to={'../connexion'}>Connexion</Link>
                <Link className="btn_inscription" to={'../inscription'}>Inscription</Link>
               
            </div>
        </nav>
        </header>
    );
}