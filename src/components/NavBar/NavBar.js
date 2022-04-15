import { AppBar, Button, Toolbar, Box } from '@mui/material'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
 
 const NavBar = () => {

  return (
     <div>
       <Box sx = {{
          display: "flex",
          alignItems : "center",
          padding : "4px"
        }}>
       <AppBar position='fixed'>
         <Toolbar>
           <Button variant="contained" color='info' size="small" component={NavLink} to="/"><HomeIcon/></Button> 
           <Button variant="contained" color ="info" size="small" component={NavLink} to="/orders">Order List</Button> 
           <Button variant="contained" color ="info" size="small" component={NavLink} to="/orders/new">Create Order</Button> 
         </Toolbar>
       </AppBar>
       </Box>
     </div>
   )
 }
 
export default NavBar