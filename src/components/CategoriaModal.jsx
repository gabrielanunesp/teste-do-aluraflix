import React, { useState } from 'react';

const CategoriaModal = ({ categoriaBeingEdited, onClose, onSave }) => {
  const [nome, setNome] = useState(categoriaBeingEdited?.nome || '');

  const handleSave = () => {
    if (!nome) {
      alert('O nome da categoria não pode estar vazio.');
      return;
    }

    const updatedCategoria = { ...categoriaBeingEdited, nome };
    onSave(updatedCategoria);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Categoria</h2>
        <form>
          <div>
            <label>Nome da Categoria</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Fechar</button>
            <button type="button" onClick={handleSave}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoriaModal;
