import React from 'react';

const CategoriaCard = ({ categoria, onEdit, onDelete }) => {
  return (
    <div className="categoria-card">
      <h3>{categoria.nome}</h3>
      <div className="categoria-actions">
        <button onClick={() => onEdit(categoria)}>Editar</button>
        <button onClick={() => onDelete(categoria.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default CategoriaCard;
