import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";



const ButtonA = styled.button`
padding: 16px;
width: 80%;
margin-top: 60px;
border-radius: 20px;
border: none;
text-transform: uppercase;
font-weight: 700;
color: #fff;
background:  linear-gradient(to right, orangered, orange);
cursor: pointer;
:hover {
  color: black;

`;


const ButtonB = styled.button `
padding: 16px;
margin-top: 50px;
width: 80%;
border-radius: 20px;
border: none;
text-transform: uppercase;
font-weight: 700;
color: #fff;
background:  linear-gradient(to right, orangered, orange);
cursor: pointer;
:hover {
  color: black;
`;

const Titulo = styled.h1`
text-align: center;
font-family: cursive;
font-size: 30px;
color: white;


`;

const HomeContainer = styled.div`
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



const Home = () => {
    const history = useHistory();

    const goToLogin = () => {
        history.push("/Login");
    };

    const goToCriarViagem = () => {
        history.push("/CriarViagem");
    };

    
    

   

  return (
    <HomeContainer>
       
      
        <Titulo><strong>LabeX</strong></Titulo>
        
       
        
        <ButtonA onClick={goToLogin}>Área do administrador</ButtonA>
               
        <ButtonB onClick={goToCriarViagem}>Quero me candidatar</ButtonB>
    
     </HomeContainer>
    
  );

};

export default Home;