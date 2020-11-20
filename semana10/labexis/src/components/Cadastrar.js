import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerCad = styled.div`
width: 500px;
height: 600px;
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

const P = styled.p`
font-size: 40px;

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


const Cadastrar = () => {
    const history = useHistory()


function funcao1()
{
 alert("Inscrição feita com sucesso!");
}
  

    return(
        <ContainerCad>
            <P>Inscrição</P>
        <Input type="text" placeholder="Nome do candidato"/>
        <Input type ="E-mail" placeholder="Email"/>
        <Input type="number" placeholder="Idade"/>  
        <Input type="text" placeholder="Profissão"/>
        <Input type="text" placeholder="Nacionalidade"/>
        <Input type="text" placeholder="Por que você é uma bom candidato(a)?"/>
        <Button onClick={funcao1}>Inscrever-se</Button>      
        
        </ContainerCad>
    )
}

export default Cadastrar;