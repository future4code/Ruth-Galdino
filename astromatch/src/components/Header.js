import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';


const  Header = () => {
    return(
        <div className='header'>
            <IconButton>
            <PeopleAltIcon fontSize="large" />
            </IconButton>
            <h2>AstroMatch</h2>
            <IconButton>
            <ModeCommentIcon fontSize="large" />
            </IconButton>
            
        </div>


       

    )
}

export default Header;