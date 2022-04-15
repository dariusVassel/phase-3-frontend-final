import { Paper, Container, Box, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import {Link, NavLink} from 'react-router-dom'

function ImporterList() {
  const [importer, setImporter] = useState({orders : []})
  const {id} = useParams() 
  
  useEffect(() => {
    fetch("http://localhost:9292/importer/" + id)
      .then(resp => resp.json())
      .then(data => {
        setImporter(data)
        console.log(data)
      })
  }, []) 

  const activeOrders = importer.orders.map(order => {
    const productName = productSearch(order.id)
    return (<p key = {order.id}> {order.quantity} tonnes at ${order.price} of product number {order.product_id}</p>)
  })

  function productSearch(number){
    // console.log(importer.products)
    const match = importer.products.filter(product => product.id = number)
    const log = match.map(product =>console.log(product.name))
    return log
  }

  // const activeProducts = importer.product.map(product => {
  //   return (<p>{product.name}</p>)
  // })
  
  // const productsOrdered = importer.products.map(product => {
  //   // console.log(order.products.filter(o => o.id == order.id))
  //   setProduct(product)
  // })

  return (

    <div>
      <NavBar/>
      <br/><br/><br/><br/>
      <Container>
      <Paper elevation = {4} variant = "outlined" padding = {4}>
      <Box padding = {2}>
      <h1>{importer.name}</h1>
      <p>{importer.address}</p>
      <p>Email: {importer.email}</p>
      <p>Mobile: {importer.mobile}</p> 
      <p>Reference Person: {importer.reference_person}</p> 
      <div>Active Orders: {activeOrders}</div>
      {/* <p>{activeProducts}</p> */}
      <Button variant="contained" color ="info" size="small" component={NavLink} to="/orders/new">New Order</Button> 
      </Box>
      </Paper>
      </Container>
    </div>
  )
}

export default ImporterList
