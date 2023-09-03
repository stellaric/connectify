import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importez les fonctions Firebase nécessaires
import { auth } from "../../../services/firebase"; // Assurez-vous que vous avez configuré Firebase correctement dans votre projet
import "../../../styles/App.css";
import "../../../styles/appMobile.css";
import videoProfil from "../../../media/video/video_profil.mp4";
import imgAlbum from "../../../media/img/album-1.png";
import imgAlbumBis from "../../../media/img/album-2.png";
import gal1 from "../../../media/img/gal1.jpg";
import gal2 from "../../../media/img/gal2.jpg";
import gal3 from "../../../media/img/gal3.jpg";
import gal4 from "../../../media/img/fd_qsn.jpg";
import Modal from "./Modal"; // Assurez-vous d'importer le composant Modal
import son1 from "../../../media/son/Down.mp3"
import son2 from "../../../media/son/Wap.mp3"

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [wallPosts, setWallPosts] = useState([]);
  const [user, setUser] = useState(null); // Ajoutez cette ligne


  useEffect(() => {
    const auth = getAuth();

    // Utilisez onAuthStateChanged pour écouter les changements d'état d'authentification
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        setUser(user);
      } else {
        // L'utilisateur n'est pas connecté, vous pouvez le rediriger ou gérer cela ici
        setUser(null);
      }
    });

    // Nettoyez l'écouteur lorsque le composant est démonté
    return () => {
      unsubscribe();
    };
  }, []);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const addPost = (e) => {
    e.preventDefault();

    const newPostInput = document.getElementById("newPostInput");
    const imageInput = document.getElementById("imageInput");
    const postContent = newPostInput.value;
    const imageURL =
      imageInput.files.length > 0
        ? URL.createObjectURL(imageInput.files[0])
        : null;

    if (postContent.trim() !== "" || imageURL !== null) {
      // Obtenez l'heure actuelle au moment de la publication
      const now = new Date();
      const heurePublication = `${now.getHours()}:${now.getMinutes()}`;

      // Créez le nouveau post avec l'heure de publication
      const newPost = { content: postContent, image: imageURL, heurePublication };

      // Ajoutez le post à la liste des posts
      setWallPosts([...wallPosts, newPost]);

      newPostInput.value = "";
      imageInput.value = null;
    }
  };


  return (
    <main>
      <div className="main_profil">
        <div className="filtre">
          <div className="filtre_content">
            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => handleTabChange("all")}
            >
              ALL
            </button>
            <button
              className={activeTab === "walls" ? "active" : ""}
              onClick={() => handleTabChange("walls")}
            >
              Walls
            </button>
            <button
              className={activeTab === "gallery" ? "active" : ""}
              onClick={() => handleTabChange("gallery")}
            >
              Gallery
            </button>
            <button
              className={activeTab === "video" ? "active" : ""}
              onClick={() => handleTabChange("video")}
            >
              Video
            </button>
            <button
              className={activeTab === "music" ? "active" : ""}
              onClick={() => handleTabChange("music")}
            >
              Music
            </button>
          </div>
        </div>

        {user ? (
        <div className="main_content">
          <div className="all">
            {(activeTab === "all" || activeTab === "walls") && (
              <section className="walls">
                <h2>My Walls</h2>

                <div id="wallPosts" className="wall_card">
        {wallPosts.map((post, index) => (
          <div key={index} className="wall_post">
           
         
            {post.image && <img src={post.image} alt="Post" />}
            <p>{post.content}</p>
            <div className="heure">
            <p>{post.heurePublication}</p>
          </div>
          </div>
        ))}
      </div>

                <div className="wall_send">
                  <form id="newPostForm" onSubmit={addPost}>
                    <div className="form-group">
                      <textarea
                        id="newPostInput"
                        placeholder="Ecrivez un message..."
                      
                      ></textarea>
                    </div>

                    <div className="btn_wall">
            {/* Utilisez le bouton personnalisé */}
        <label htmlFor="imageInput" className="btn_download">
                   
        <iconify-icon icon="line-md:arrow-close-down" style={{ color: "white" }} width="30" height="30" />
       
        </label>
        {/* Cachez l'élément d'entrée de type fichier */}
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: 'none' }}
        />
                      <button type="submit">
                      <iconify-icon icon="teenyicons:send-solid" style={{ color: "white" }} width="30" height="30" />
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            )}

            {(activeTab === "all" || activeTab === "gallery") && (
              <section className="gallery">
                <h2>Gallery</h2>
                <div className="col_gallery">
                  <img
                    className="hover"
                    src={gal1}
                    alt="p1"
                    onClick={() => openModal(gal1)}
                  />
                  <img
                    className="hover"
                    src={gal2}
                    alt="p2"
                    onClick={() => openModal(gal2)}
                  />
                </div>
                <div className="col_gallery">
                  <img
                    className="hover"
                    src={gal3}
                    alt="p3"
                    onClick={() => openModal(gal3)}
                  />
                  <img
                    className="hover"
                    src={gal4}
                    alt="p4"
                    onClick={() => openModal(gal4)}
                  />
                </div>
              </section>
            )}

            {(activeTab === "all" || activeTab === "video") && (
              <section className="video">
                <h2>Video</h2>
                <video controls width="843" height="800">
                  <source src={videoProfil} type="video/mp4" />
                </video>
              </section>
            )}
            {(activeTab === "all" || activeTab === "music") && (
              <section className="music">
                <h2>Music</h2>
                <div className="card_music">
                  <div className="header_card">
                    <img src={imgAlbum} alt="p4" />
                  </div>
                  <div className="main_card">
                    <h3>RioGane - Down </h3>
                    <div className="audio-container">
                      <audio id="audioPlay" controls >
                        <source src={son1} type="audio/mp3" />
                      </audio>
                    </div>
                  </div>
                </div>
                <div className="card_music">
                  <div className="header_card">
                    <img src={imgAlbumBis} alt="p4" />
                  </div>
                  <div className="main_card">
                    <h3>Grange - WAP </h3>
                    <div className="audio-container">
                      <audio id="audioPlay" controls >
                      <source src={son2} type="audio/mp3" />
                      </audio>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
         ) : (
          <p>Vous devez vous connecter pour voir le contenu.</p>
          
        )}
        {modalOpen && <Modal imgUrl={selectedImage} onClose={closeModal} />}
      </div>
    </main>
  );
}
