import React from 'react';
import '../App.css';
import '../appMobile.css'
import video from '../media/video/fd_accueil.mp4'
import { Link } from 'react-router-dom'
export default function Header() {
    return ( 
     <header className="header_index">
        <nav className="navbar">
            <h1 >Connectify</h1>
            <div className="onglets">
                <Link to={'/'}>Accueil</Link>
                <Link to={'connexion'}>Connexion</Link>
                <Link  className="btn_inscription" to={'inscription'}>Inscription</Link>
               
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