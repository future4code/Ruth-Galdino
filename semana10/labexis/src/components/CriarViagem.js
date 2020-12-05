import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
font-size: 20px;


`;

const P = styled.p`
border: 1px black solid;
box-shadow: 5px 5px 5px 5px #888888;
`;

const ContainerCriar = styled.div`
width: 800px;
height: 700px;
background: linear-gradient(purple, darkblue);
border-radius: 20px;
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



const Button = styled.button`
padding: 5px;
width: 30%;
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



 const CriarViagem = () => {
        const history = useHistory();

        const goToHome = () => {
            history.push("/");
        }; 

        const goToCadastrar = () => {
             history.push("/cadastrar");
    };
    return(
        <ContainerCriar>
            
            <H1>Candidate-se para a sua viagem dos sonhos!</H1>
           
            <P>Multi luau em Jupiter - 21/12/20 - Jupiter - 540 dias
             Noite mágica, com vista para as 69 luas de Jupiter</P> 

            <Button onClick={goToCadastrar}>Candidatar</Button>
             
             <P>Show Vermelho - 2020-07-03 - Marte - 300 dias
            Vermelho claro, vermelho escuro, vermelho médio e vermédio basico.</P>

            <Button onClick={goToCadastrar}>Candidatar</Button>

            <P>Festança Marciana - 21/12/21 - Marte - 228 dias
            Uma viagem bem legal, na melhor época de marte</P>
            <Button onClick={goToCadastrar}>Candidatar</Button>
        
            <P>Picnic de Inverno em Plutão - 21/12/20 - Plutão - 980 dias
            Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C</P>
            <Button onClick={goToCadastrar}>Candidatar</Button>
            
        </ContainerCriar>
    )
}

export default CriarViagem;