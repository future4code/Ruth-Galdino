import React, {useState} from 'react';
import axios from 'axios';
import baseUrl from '../constants/baseUrl';
import {TextField, Button, AppBar} from '@material-ui/core'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';




const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vw;
    width: 60vw;
    max-width: 460px;
    margin: 0 auto;
    
`

const Img = styled.img`
    margin-top: 50px;
    height: 80px;
    padding: 40px;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    
`


const LoginPage = (props) => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleGoToSignup = () => {
      history.push("/signup")
  }

  const handleUpdateEmail = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
  }

  const handleUpdatePassword = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
  }
 
  const handleLogin = async (event) => {
      event.preventDefault();
      const body = {
          email: email,
          password: password,
      }

      try{

     const response = await axios.post(`${baseUrl}/login`, body);
    

     localStorage.setItem("token", response.data.token );
     
     history.push("/feed")

      }catch(error){
          alert("tente novamente")
          console.error(error);
      }
  }

    return(
        
        <LoginPageContainer>
            
            <Img src={logo} />
            <FormContainer onSubmit={handleLogin} >
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    onChange={handleUpdateEmail}
                    value={email}
                   
                />
                <TextField  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    onChange={handleUpdatePassword}
                    value={password}
                 
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    
                >
                    Login
                </Button>
            </FormContainer>
            <Button
                color="primary"
                onClick={handleGoToSignup}
            >
                Não tem Login? Clique aqui
            </Button>
        </LoginPageContainer>
       
    )
}

export default LoginPage;