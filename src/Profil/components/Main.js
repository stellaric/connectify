import React from 'react';
import '../../App.css';
import videoProfil from '../../media/video/fd_accueil.mp4'
export default function Main(){

 
    return(
<main>
    <div className='main_profil'>
    <div className='filtre'>
        <div className='filtre_content'>
           
                <button>ALL</button>
                <button>Wall</button>
                <button>Gallery</button>
                <button>Video</button>
                <button>Music</button>

         
        </div>
    </div>




    
    <div className='main_content'>
        <div className='all'>
        <section className='walls'>
            <h2>My Walls</h2>
            <div className='wall_card'>
<div className='wall_content'>
    <div className='wall_post'>
        <p> Le Rap US {'>>>'} Rap FR </p>
        <div className='wall_post_footer'><p>8:30</p></div>
      </div>
    <div className='wall_post'>
    <div className='wall_post_footer'>
    <p> Le Rap US {'>>>'} Rap FR </p>
        <p>8:30</p>
        </div>
    </div>
</div>
<div className='wall_send'>
<input type="text" placeholder="Ecrivez un message..." />
<button type='submit'id='btn_upload'>upload</button>
<button type='submit'id='btn_send'>send</button>
</div>
            </div>

        </section>
        <section className='gallery'>
                <h2>Gallery</h2>
                <div className="col_gallery">  
                <img src="https://picsum.photos/200/300" alt="p1"/>
                <img src="https://picsum.photos/200/300" alt="p2"/>
                </div>
                  
                <div className="col_gallery">
                <img src="https://picsum.photos/200/300" alt="p3"/>
                <img src="https://picsum.photos/200/300" alt="p4"/>
                      </div>
        </section>
        <section className='video'>
                <h2>Video</h2>
                <video controls width="843" height="800">
  <source src={videoProfil} type="video/mp4" />
</video>
        </section>
        <section className='music'>
                <h2>Music</h2>
                <div className='card_music'>
                    <div className="header_card"><img src="https://picsum.photos/200/300" alt="p4" /></div>
                    <div className="main_card">
                        <h3>RioGane -Down </h3>
                        <div className="audio-container">
            <audio id="audioPlay" controls autoPlay loop>
            <source src="src/son/son_game2.mp3" type="audio/mp3" />
       
        </audio>
        </div>
                        </div>
                </div>
                 <div className='card_music'>
                    <div className="header_card"><img src="https://picsum.photos/200/300" alt="p4"/>
                 </div>
                    <div className="main_card">
                    <h3>RioGane -Down </h3>
                    <div className="audio-container">
            <audio id="audioPlay" controls autoPlay loop>
            <source src="src/son/son_game2.mp3" type="audio/mp3" />
       
        </audio>
        </div>
                    </div>
                </div>
        </section>
        </div>
    </div>
    </div>
</main>

    )

}
