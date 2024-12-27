// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css"; // Certifique-se de que o arquivo Header.css exista

const Header = ({ onAddVideo }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    videoUrl: "",
  });

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(formData);
    setFormData({ title: "", category: "", description: "", videoUrl: "" });
    setShowForm(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="title-container">
        <span>AluraFlix</span>
      </div>
      <nav>
        <button>Início</button>
        <button onClick={handleOpenForm}>Novo Vídeo</button>
      </nav>
      {showForm && (
        <div className="form-container-overlay">
          <div className="form-container">
            <button onClick={handleCloseForm} className="close-button">
              Fechar
            </button>
            <form onSubmit={handleSubmit}>
              <label>
                Título:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Digite o título do vídeo"
                  required
                />
              </label>
              <label>
                Categoria:
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma categoria</option>
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
                  value={formData.videoUrl}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                />
              </label>
              <label>
                Descrição:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Adicione uma descrição"
                />
              </label>
              <button type="submit" className="save-button">
                Salvar
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
