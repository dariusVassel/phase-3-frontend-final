import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
 
 const NavBar = () => {

  return (
     <div>
       <AppBar position='fixed'>
         <Toolbar>
           <Button variant="contained" color ="secondary" size="small" component={NavLink} to="/"><HomeIcon/></Button> 
           <Button variant="contained" color ="secondary" size="small" component={NavLink} to="/orders">Order List</Button> 
           <Button variant="contained" color ="secondary" size="small" component={NavLink} to="/orders/new">Create Order</Button> 
         </Toolbar>
       </AppBar>
     </div>
   )
 }
 
export default NavBar