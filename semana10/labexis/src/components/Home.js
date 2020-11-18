import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();

    const goToLogin = () => {
        history.push("/Login");
    };

    const goToContato = () => {
        history.push("/Contato");
    };

    const goToCriarViagem = () => {
        history.push("/criarViagem");
    }; 
    

   

  return (
    <div>
        <p>Home</p>
        <button onClick={goToLogin}>goToLogin</button>
        <button onClick={goToContato}>Contato</button>
        <button onClick={goToCriarViagem}>Criar viagem</button>
     
    </div>
  );
};

export default Home;