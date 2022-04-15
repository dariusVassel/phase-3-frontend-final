import React, { useEffect } from 'react'
import OrderCard from './OrderCard/OrderCard'
import { Container, Grid } from '@mui/material'
import NavBar from '../NavBar/NavBar'


function OrderList({orders, handleDeleteClick, setOrders}) {
  const orderCards = orders.map(order => <OrderCard order = {order} key = {order.id} handleDeleteClick = {handleDeleteClick}/>)

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then(resp => resp.json())
      .then(data => {
        setOrders(data)
        console.log(data)
      })
  }, []) 

  return (
    <>
    <NavBar/>
    <br/><br/><br/><br/>
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Container>
          {orderCards}
        </Container>
      </Grid>
    </div>
    </>
  )
}

export default OrderList