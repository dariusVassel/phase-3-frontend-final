import React, { useState } from 'react'
import {  Button, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import { Paper, Grid, Box } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import { padding } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';





function OrderCard({order, handleDeleteClick}) {
  const [checked, setChecked] = React.useState()

  function onDelete(e){
    console.log(order.id)
    handleDeleteClick(e, order.id)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Grid item xs={12}>
      <Paper elevation = {4} variant = "outlined" padding = {4}>
        <Box padding = {2}>
        <Typography variant="subtitle1" component="h1"><AssignmentIcon fontSize='sm' color='inherit'/>  Purchase Order: {order.PO} ({order.product.name})</Typography>
        <Typography variant="subtitle2" component="h2">{order.quantity} tonnes of {order.product.name} at ${order.price}</Typography>
        <Typography variant="subtitle2" component="h2">Product Specification: {order.product.description}</Typography>
        <Typography variant="subtitle2" component="h2"><EventIcon fontsize="sm" color="disabled"/>   Order Date: {order.date}</Typography>
        <Typography variant="subtitle2" component="h2">Importer: <Link to ={`/importer/${order.importer.id}`}>{order.importer.name}</Link></Typography>
        <Typography variant="subtitle2" component="h2">Order Status:  <Switch checked={checked? true:false} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} label ="Order Status"/></Typography>
       
        <br/>
        <Box sx = {{
          display: "flex",
          alignItems : "center",
          padding : "4px"
        }}>
        {/* <Button color="primary" variant ="contained">Edit</Button> */}
        <Button color="primary" variant ="contained" startIcon={<DeleteIcon />} onClick={onDelete}>Delete</Button>
        </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default OrderCard