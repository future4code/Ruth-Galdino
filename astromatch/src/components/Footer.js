import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';


const Footer = () => {
    return(
        <div className='Footer'>
            
             <IconButton>
              <ClearIcon fontSize="large"/>
             </IconButton>

             <IconButton> 
             <FavoriteIcon fontSize="large" />
             </IconButton>
             
            

    
            </div>
            
            )
            
    
            
    
}

export default Footer;