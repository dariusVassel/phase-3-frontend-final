import React from 'react'
import OrderCard from './OrderCard/OrderCard'

function OrderList({orders}) {
  const orderCards = orders.map(order => <OrderCard order = {order} key = {order.id}/>)
  return (
    <div>OrderList
    {orderCards}
    </div>
  )
}

export default OrderList