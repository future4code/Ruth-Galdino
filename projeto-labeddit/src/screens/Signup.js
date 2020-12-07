import React, {useState} from 'react';
import styled from 'styled-components'
import {TextField, Button} from '@material-ui/core'
import logo from '../assets/logo.png'
import {useHistory} from 'react-router'
import axios from  'axios'
import baseUrl from '../constants/baseUrl'

const SignupPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vw;
    width: 60vw;
    max-width: 460px;
    margin: 0 auto;
    
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: space-around;
   
`
const Img = styled.img`
    margin-top: 50px;
    height: 80px;
    padding: 50px;
`

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername)
    }

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
    }
   
    const handleSignup = async (event ) => {
        event.preventDefault();

        const body = {
            email: email,
            password: password,
            username: username
        }
     try{
        const response = await axios.post(`${baseUrl}/signup`, body );

        localStorage.setItem("token", await response.data.token)

        history.push("/")

     }catch (error) {
         alert("Cadastro falhou, tente novamente!")
         console.error(error);
     }
    }


  

    return (
        <SignupPageContainer>
            <Img src={logo}/>
            <FormContainer onSubmit={handleSignup} >
                <TextField 
                    label="Nome de usuário"
                    variant="outlined"
                    type="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    
                />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                   
                />
                <TextField  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Cadastrar
                </Button>
            </FormContainer>

        </SignupPageContainer>
    )
}


export default Signup;