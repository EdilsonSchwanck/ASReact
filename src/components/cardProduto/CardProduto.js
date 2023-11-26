// CardProduto.js
import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './CardProduto.css';

function CardProduto({ nome, preco, descricao, fotoUrl }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const openModal = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.top });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="card" onClick={openModal}>
        <img src={fotoUrl} alt={nome} className="profile-image" />
        <h2>{nome}</h2>
        <p>Preço: {preco}</p>
        <p>Descrição: {descricao}</p>
      </div>
      {modalOpen && (
        <Modal
            isOpen={modalOpen}
            closeModal={closeModal}
            nome={nome}
            preco={preco}
            descricao={descricao}
            fotoUrl={fotoUrl}
            position={modalPosition}
        />
      )}
    </div>
  );
}

export default CardProduto;
