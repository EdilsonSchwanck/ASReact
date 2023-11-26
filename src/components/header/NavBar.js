import './NavBar.css';
import React from 'react';
   
import { Link } from 'react-router-dom'


function NavBar({title}){

    return (
        <>
        <div className="fundo">
            <div className='half'>
                <div className="half-content">
                    <p>{title}</p>
                </div>
            </div>
            <div className='half'>
                <div className="half-content">
                    <nav className='navegador'>
                        <Link to={"/"}>HOME</Link>
                        <Link to={"/produtos"}>PRODUTOS</Link>
                        <Link to={"/cadastroProdutos"}>CADASTRO DE PRODUTOS</Link>
                        
                    </nav>
                </div>
            </div>
            
        </div>

        </>
    )

}
//<Link to={"/produtos"}>PRODUTOS</Link>
//<Link to={"/contato"}>CADASTRO DE PRODUTOS</Link>
export default NavBar;