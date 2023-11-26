import Formes from '../../components/formes/Formes';
import NavBar from '../../components/header/NavBar';
import './Cadastro.css'

function Cadastro() {
    const handleFormSubmit = (novoProduto) => {
        console.log("Novo produto enviado:", novoProduto);
    
    };

    return (
        <>
            <NavBar title={"CADASTRO DE PRODUTOS"}/>
            <div className="container">
                <div className="half">
                    <img alt="imagem decorativa" src="https://img.freepik.com/free-vector/geometric-network-connection-background_23-2148876717.jpg?w=1380&t=st=1701013338~exp=1701013938~hmac=047106350e7681e7b7ed91ec5f8bbdf5e0f51f2942f00d5d2bd83a8da8b1a10b"></img>
                </div>
                <div className="half">
                    <div className="half-content">
                        <Formes FormSubmit={handleFormSubmit} />
                    </div>
                </div>
            </div>
        
        
        </>
    );

}

export default Cadastro