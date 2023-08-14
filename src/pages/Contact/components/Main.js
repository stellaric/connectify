
import '../../../styles/App.css';
import '../../../styles/appMobile.css'
import React,{useState} from 'react';
import imgContact from '../../../media/img/fd_contact.jpg'



export default function Main(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le comportement de soumission par défaut
    
        // Traitez ici votre logique d'envoi de message, si nécessaire
    
        // Ouvre la fenêtre modale une fois que le formulaire a été soumis avec succès
        setIsModalOpen(true);
      };
    
    return(
        <main>



        {/*section contact*/}
        <section className="contact_pg">
                <div className="gauche">
                    <img src={imgContact} alt="img_contact"/>
                    </div>
                <div className="droite">
                    <h2>Nous Contacter</h2>


                   <form method="GET" onSubmit={handleSubmit}>
        <div className="content_form">
        <div className='label_email'>
            <label name="email">Email:</label>
            <input type="text" placeholder='Entrez votre email...'/>
        </div>
        <div className='label_sujet'>
        <label name="sujet">Sujet:</label>
            <input type="text" placeholder='Sujet de votre  message..'/>
        </div>
        <div className='label_message'>
        <label name="message">Message:</label>
            <textarea cols="30" rows="10"placeholder='Ecrivez votre  message..'></textarea>
        </div>

        <button type='submit'>Valider </button>
        </div>
                   </form>
                  

{/* Fenêtre modale */}
{isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Message envoyé</h3>
            <p>Votre message a été envoyé au service client Connectify.</p>
            <button onClick={() => setIsModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
 </div>
            </section>
        </main>
    );
}