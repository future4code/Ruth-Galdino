import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const ButtonsContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`

const Header = ()=> {
    const history = useHistory();

    const goToLogin = () => {
        history.push("/");
      };
    
    return(
        <AppBar>
          <Toolbar>
            <ButtonsContainer>
              <Button color="inherit" >labEddit</Button>
              <Button color="inherit" onClick={goToLogin}> login
                
              </Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}

export default Header;