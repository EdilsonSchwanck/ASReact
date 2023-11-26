import './CardProduto.css';

import React from 'react';


function CardProduto({ nome, preco, descricao, fotoUrl }) {
    return (
        <div className="card">
            <img src={fotoUrl} alt={nome} className="profile-image" />
            <h2>{nome}</h2>
            <p>Preço: {preco}</p>
            <p>Descrição: {descricao}</p>
        </div>
    );
}

export default CardProduto;
