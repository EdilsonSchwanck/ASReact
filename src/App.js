import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ProductContext } from './poductContext/ProductContext';
import Home from './pages/Home';
import Cadastro from './pages/cadastroProdutos/Cadastro';
import Produtos from './pages/produtos/produtos';


function App() {
    const[products, setProducts] = useState()

  
    return (
        <>
         <ProductContext.Provider value={{products, setProducts}}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/produtos' element={< Produtos/>} />
          
          <Route path='/cadastroProdutos' element={<Cadastro />} />
    
        </Routes>
      </BrowserRouter>
      </ProductContext.Provider>
        </>
    );
}

export default App;
