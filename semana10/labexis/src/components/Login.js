import React from "react";
import { useHistory } from "react-router-dom";



const Login = () => {
    const history = useHistory();
  
    const goToHome = () => {
      history.push("/Home");
    };
  
    const goToContato = () => {
      history.push("/contato");
    };
  
    return (
      <div>
        <p>Login</p>
        <input placeholder="Nome"></input>
        <input placeholder="Email"></input>
        <input placeholder="Nº para contato"></input>
        <input placeholder="Cidade onde mora"></input>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToContato}>Contato</button>
        
        

      </div>
    );
  };



export default Login;