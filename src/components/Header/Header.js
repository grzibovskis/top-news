import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { AppBar, Toolbar, Button,IconButton,Stack } from '@mui/material';

const Header = () => {
  
  return (
    <>
        <AppBar position='static' sx={{ bgcolor: '#636363',}}>
   
                <Toolbar >
                    <IconButton size='large' edge='start'>
                      <img className='Logo' src={Logo} alt="Logo" />
                    </IconButton>
                    <Stack direction='row' spacing={2} sx={{ mr: 2, margin: 'auto' }}>
                      <Link to="/"><Button to="/" variant="contained" color="primary"size='small'>Tech News</Button></Link>
                      <Link to="/tesla"><Button to="/tesla" variant="contained" color="primary" size='small'>Tesla News</Button></Link>
                      <Link to="/business"><Button variant="contained" color="primary" size='small'>Business News</Button></Link>
                    </Stack>
                </Toolbar>

        </AppBar>
    </>
  )
}

export default Header

