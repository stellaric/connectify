import React from 'react';
import '../../App.css';


import imgConnexion from '../../media/img/fd_connexion.jpg'

export default function Main(){
    return(
        <main>


        {/*section contact*/}
        <section className="contact">
                <div className="gauche">
                    <img src={imgConnexion} alt="img_connexion "/>
                    </div>
                <div className="droite">
                    <h2>Connexion</h2>
                   <form>

                   </form>
                   </div>
            </section>

  
        </main>
    );
}