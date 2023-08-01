import React from 'react';
import '../accueil.css';
import video from '../../media/video/fd_accueil.mp4'

export default function Header() {
    return ( 
     <header className="header_index">
        <nav className="navbar">
            <h1 >Connectify</h1>
            <div className="onglets">
                <a href="#">Accueil</a>
                <a href="#">Connexion</a>
                <a href="#">Inscription</a>
            </div>
        </nav>

<div className="banniere_accueil">
        <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

        <div className="container">
        <h1>
          Connectify
        </h1>
        </div>
      </div>
        </header>
    );
}