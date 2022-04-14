import React from 'react'
import {  Button } from '@mui/material'


function OrderCard({order}) {
  return (
    <>
    <h3>{order.PO}</h3>
    <p>{order.importer.name}</p>
    <p>{order.product.name}</p>
    <p>{order.product.description}</p>

    <Button color="primary" variant ="contained">Edit</Button>
    <Button color="primary" variant ="contained">Delete</Button>
    </>
  )
}

export default OrderCard