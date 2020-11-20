import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const ContainerLogin = styled.div`
  width: 500px;
  height: 500px;
	background: linear-gradient(purple, darkblue);
	border-radius: 15px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	padding-top: 50px;
	color: #fff;
	align-items: center;
  line-height: 50px; 
  box-shadow: 5px 5px 8px 10px #888888;

`;

const Input = styled.input`
width: 80%;
margin: 0 auto;
padding: 15px;
border: none;
margin-bottom: 10px;
border-radius: 50px;
box-shadow: 5px 3px 3px 3px #888888;

`;

const Button = styled.button`
padding: 10px;
width: 60%;
margin: 0 auto;
margin-top: 20px;
border-radius: 50px;
border: 1px solid black;
text-transform: uppercase;
font-weight: 700;
color: #fff;
background: linear-gradient(to right, orangered, orange);
cursor: pointer;
:hover {
  color: black;
`;

const P = styled.p`
font-size: 40px;

`;


const Login = () => {
    const history = useHistory();
  
    const goToHome = () => {
      history.push("/");
    };
  
    

    const goToCriarViagem = () => {
      history.push("/criarViagem");
  }; 
  
    return (
      <ContainerLogin>
        
           <P>Login</P>

       <br/>

       
        <Input placeholder="Email"></Input>             
        <Input placeholder="Senha"></Input>
        
        
        <Button onClick={goToCriarViagem}>Entrar</Button>
        
        
       
        
       
       

      </ContainerLogin>
    );
  };



 export default Login;