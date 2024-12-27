// src/components/Card.jsx
// src/components/Card.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import "./Card.css";

function Card({ title, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="edit-button" onClick={handleEditClick}>
        Editar
      </button>
      <button className="delete-button">Excluir</button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={<p>Formulário ou conteúdo para edição do vídeo "{title}"</p>}
      />
    </div>
  );
}

export default Card;
