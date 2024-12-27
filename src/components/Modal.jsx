// Modal.jsx
// Modal.jsx
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
        <h2>Editar Card</h2>
        <form>
          <label>
            Título:
            <input type="text" placeholder="Digite o título do vídeo" />
          </label>
          <label>
            Categoria:
            <select>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="gestao">Gestão</option>
            </select>
          </label>
          <label>
            Imagem:
            <input type="text" placeholder="URL da imagem" />
          </label>
          <label>
            Vídeo:
            <input type="text" placeholder="URL do vídeo" />
          </label>
          <label>
            Descrição:
            <textarea placeholder="Adicione uma descrição"></textarea>
          </label>
          <div className="modal-buttons">
            <button type="button" className="save-button">
              Salvar
            </button>
            <button type="reset" className="clear-button">
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;








