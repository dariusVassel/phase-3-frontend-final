import React from 'react'
import background from "../../Assets/DJI_0727.jpg" 
import {Container, Box} from '@mui/material' 
import {Button} from '@mui/material'
import {Link, NavLink} from 'react-router-dom'
import logo from "../../Assets/FinalLogo.png" 



function Home() {
  
  return (
    <Box sx = {{
      minHeight : '100vh',
      backgroundImage : `url(${process.env.PUBLIC_URL + background})`,
      backgroundRepeat : 'no-repeat',
      backgroundSize : 'cover',
    }}>
      <Container fixed>
        <Box sx = {{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100vh'
        }}>
        <NavLink to="/orders">
        <img src= {logo} width="400" component={Link} to="/orders" />
        </NavLink>
        </Box>
      </Container>
    </Box>
  )
}

export default Home