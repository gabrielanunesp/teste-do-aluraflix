// src/components/Categorias.jsx
import React, { useState } from "react";
import "./Categorias.css";

const Categorias = ({ videos, onEditVideo, onDeleteVideo }) => {
  const categorias = ["frontend", "backend", "gestao"];
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Função para filtrar os vídeos por categoria
  const videosByCategory = (category) => {
    return videos.filter((video) => video.category === category);
  };

  // Função para abrir o modal de edição
  const handleEditClick = (video) => {
    setCurrentVideo(video);
    setShowModal(true);
  };

  // Função para fechar o modal de edição
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  // Função para excluir um vídeo
  const handleDeleteClick = (video) => {
    onDeleteVideo(video);
  };

  return (
    <div className="categorias">
      {categorias.map((category) => (
        <div key={category} className="categoria">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="videos">
            {videosByCategory(category).map((video, index) => (
              <div key={index} className="card">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                {video.videoUrl && (
                  <iframe
                    width="100%"
                    height="200" // Tamanho reduzido do iframe
                    src={video.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                )}
                <div className="actions">
                  <button onClick={() => handleEditClick(video)}>Editar</button>
                  <button onClick={() => handleDeleteClick(video)}>Excluir</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {showModal && currentVideo && (
        <div className="form-container-overlay">
          <div className="form-container">
            <button onClick={handleCloseModal} className="close-button">Fechar</button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onEditVideo(currentVideo);
                handleCloseModal();
              }}
            >
              <label>
                Título:
                <input
                  type="text"
                  name="title"
                  value={currentVideo.title}
                  onChange={(e) => setCurrentVideo({ ...currentVideo, title: e.target.value })}
                  required
                />
              </label>
              <label>
                Categoria:
                <select
                  name="category"
                  value={currentVideo.category}
                  onChange={(e) => setCurrentVideo({ ...currentVideo, category: e.target.value })}
                  required
                >
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="gestao">Gestão</option>
                </select>
              </label>
              <label>
                URL do Vídeo:
                <input
                  type="url"
                  name="videoUrl"
                  value={currentVideo.videoUrl}
                  onChange={(e) => setCurrentVideo({ ...currentVideo, videoUrl: e.target.value })}
                  required
                />
              </label>
              <label>
                Descrição:
                <textarea
                  name="description"
                  value={currentVideo.description}
                  onChange={(e) => setCurrentVideo({ ...currentVideo, description: e.target.value })}
                />
              </label>
              <button type="submit" className="save-button">Salvar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias;
