import React from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';

export default function Header() {
    return ( 
     <header className="header_connexion">
        <nav className="navbar_deux">
            <h1 >Connectify</h1>
            <div className="onglets">
              <span> <Link to={'/'}>Accueil</Link></span> 
               <span><Link to={'../connexion'}>Connexion</Link></span> 
                <Link to={'inscription'}>Inscription</Link>
               
            </div>
        </nav>
        </header>
    );
}