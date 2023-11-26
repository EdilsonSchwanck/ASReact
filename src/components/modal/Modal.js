import React from 'react';
import './Modal.css';

function Modal({ isOpen, closeModal, nome, preco, descricao, fotoUrl, position }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" style={{ top: position.y, left: position.x }} onClick={(e) => e.stopPropagation()}>
          <h2>{nome}</h2>
          <p>Preço: {preco}</p>
          <p>Descrição: {descricao}</p>
          <img src={fotoUrl}/>
          <button onClick={closeModal}>Fechar</button>
        </div>
      </div>
    );
  }
  
  export default Modal;