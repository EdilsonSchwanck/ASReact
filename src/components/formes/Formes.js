// Formes.js
import React, { useState } from 'react';
import './Formes.css';

function Formes() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [fotoUrl, setFotoUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (nome.length < 5) {
            alert('O nome deve ter pelo menos 5 caracteres.');
            return;
        }

        if (parseFloat(preco) <= 0) {
            alert('O preço deve ser maior que zero.');
            return;
        }

        if (descricao.trim() === '') {
            alert('A descrição não pode ser vazia.');
            return;
        }

    
        const novoProduto = {
            name : nome ,
            price : preco,
            description : descricao,
            photo_url : fotoUrl,
        };

            
            const response = await fetch("http://localhost:3001/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoProduto),
            });

  
            if (response) {
                setNome('');
                setPreco('');
                setDescricao('');
                setFotoUrl('');
                alert('Produto cadastrado com sucesso!');
            } else {
                alert('Erro ao cadastrar o produto');
            }
      
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>

                <div className="form-row">
                    <label>Preço:</label>
                    <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>

                <div className="form-row">
                    <label>Descrição:</label>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <div className="form-row">
                    <label>Foto (URL):</label>
                    <input type="text" value={fotoUrl} onChange={(e) => setFotoUrl(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Formes;
