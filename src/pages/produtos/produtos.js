import CardProduto from '../../components/cardProduto/CardProduto';
import React, {useContext ,useState, useEffect } from 'react';
import { ProductContext } from "../../poductContext/ProductContext"
import NavBar from '../../components/header/NavBar';
import './produtos.css'
import { UseDebounce } from '../../hooks/UseDebounce';



function Produtos() {

    const [data, setData] = useState([])
    const productContext = useContext(ProductContext)
  
    const fetchProducts = async () => {
      const result = await fetch("http://localhost:3001/products")
      const products = await result.json()
      console.log(products)
      setData(products)
      productContext.setProducts(products)
    }
    UseDebounce({
      func : () => 
        fetchProducts() 
      ,
      
     time : 1000
    }
    
    )

    return (
      <>
      <NavBar title={"Produtos"}/>
      <div className="container">
        <div className="card-container">
          {data && data.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.name}
              preco={produto.price}
              descricao={produto.description}
              fotoUrl={produto.photo_url}
            />
          ))}
        </div>
      </div>
    </>
    );
  
}

export default Produtos;