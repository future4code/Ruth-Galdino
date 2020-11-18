import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";




const Home = () => {
    const history = useHistory();

    const goToLogin = () => {
        history.push("/Login");
    };

    const goToCadastrar = () => {
        history.push("/Cadastrar");
    };

    /*const goToCriarViagem = () => {
        history.push("/criarViagem");
    }; */
    

   

  return (
    <div className="titulo">
        <p><strong>LabeXis</strong></p>
       
       
        <button onClick={goToLogin}>Área do administrador</button>
        <button onClick={goToCadastrar}>Quero me candidatar</button>
        
     </div>
   
  );
};

export default Home;