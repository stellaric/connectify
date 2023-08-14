import React from 'react';
import '../../../styles/App.css';
import '../../../styles/appMobile.css'
import { Link } from 'react-router-dom';



function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

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
               
                     {/*menu mobile*/ }
                <span className='burgerMenu' onClick={openNav}>☰ </span>
                <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  <div className="overlay-content">
  <h1 >Connectify</h1>
  <Link to={'/'}>Accueil</Link>
                <Link to={'../connexion'}>Connexion</Link>
                <Link  to={'../inscription'}>Inscription</Link>
  
  </div>
            </div>
        </nav>
        </header>
    );
}