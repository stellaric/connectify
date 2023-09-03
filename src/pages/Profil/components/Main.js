import React, { useState } from "react";
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

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  const [activeTab, setActiveTab] = useState("all");
  const [wallPosts, setWallPosts] = useState([]);

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
      setWallPosts([...wallPosts, { content: postContent, image: imageURL }]);
      newPostInput.value = "";
      imageInput.value = null;
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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

        <div className="main_content">
          <div className="all">
            {(activeTab === "all" || activeTab === "walls") && (
              <section className="walls">
                <h2>My Walls</h2>

                <div id="wallPosts" className="wall_card">
                  {wallPosts.map((post, index) => (
                    <div key={index} className="wall_post">
                      {post.content}
                      {post.image && <img src={post.image} alt="Post" />}
                    </div>
                  ))}
                </div>

                <div className="wall_send">
                  <form id="newPostForm" onSubmit={addPost}>
                    <div className="form-group">
                      <textarea
                        id="newPostInput"
                        placeholder="Ecrivez un message..."
                        rows="4"
                        cols="50"
                      ></textarea>
                    </div>

                    <div className="btn_wall">
            {/* Utilisez le bouton personnalisé */}
        <label htmlFor="imageInput" className="custom-file-upload">
        <iconify-icon icon="line-md:arrow-close-down" style={{ color: "white" }} width="80" height="80" />
        </label>
        {/* Cachez l'élément d'entrée de type fichier */}
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: 'none' }}
        />
                      <button type="submit">
                        <iconify-icon icon="line-md:download-outline" />
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
                    <h3>RioGane -Down </h3>
                    <div className="audio-container">
                      <audio id="audioPlay" controls autoPlay loop>
                        <source src="src/son/son_game2.mp3" type="audio/mp3" />
                      </audio>
                    </div>
                  </div>
                </div>
                <div className="card_music">
                  <div className="header_card">
                    <img src={imgAlbumBis} alt="p4" />
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
            )}
          </div>
        </div>
        {modalOpen && <Modal imgUrl={selectedImage} onClose={closeModal} />}
      </div>
    </main>
  );
}
