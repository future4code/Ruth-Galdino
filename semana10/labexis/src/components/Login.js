import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import './styled.css';

/*const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `;
  const P = styled.p`
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  `;
  const Input = styled.input`
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    `;
  
  const Button = styled.button `
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  
  `;
*/


const Login = () => {
    const history = useHistory();
  
    const goToHome = () => {
      history.push("/");
    };
  
    const goToCadastrar = () => {
      history.push("/cadastrar");
    };
  
    return (
      <div className="Login">
        
           <p>Login</p>

       <br/> 
       <br/>

       
        <input placeholder="Email"></input>             
        <input placeholder="Senha"></input>
        
        <br/>
        
        <button onClick={goToHome}>Home</button>
        <button onClick={goToCadastrar}>Cadastrar</button>
       
        
       
       

      </div>
    );
  };



 export default Login;