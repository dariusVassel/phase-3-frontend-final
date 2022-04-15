import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./components/Home/Home"
import OrderList from "./components/OrderList/OrderList"
import NavBar from "./components/NavBar/NavBar";
import OrderForm from "./components/OrderForm/OrderForm";
import  ImporterList  from "./components/ImporterList/ImporterList";


function App() {
  const [orders, setOrders] = useState()

  // FETCH DATA
  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then(resp => resp.json())
      .then(data => {
        setOrders(data)
        console.log(data)
      })
  }, []) 

  function pushSubmit(dataArray) {
    const newOrder = dataArray
    
    const newOrderList = [...orders, newOrder]

    console.log(newOrderList)
    setOrders(newOrderList)

    fetch("http://localhost:9292/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newOrder)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        navigate("/")
      })
  }

  function handleDeleteClick(e, id){
    fetch(`http://localhost:9292/orders/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => deleteOrder(data));
  }

  function deleteOrder(data){
    setOrders(orders.filter(o => o.id !== data.id))
  }

  const navigate = useNavigate();

  return (
    <div className="App">
      <div>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/orders' element={<OrderList orders = {orders} setOrders = {setOrders} handleDeleteClick={handleDeleteClick}/>}/>
          <Route path='/orders/new' element={<OrderForm pushSubmit={pushSubmit}/>}/>
          <Route path='/importer/:id' element={<ImporterList />}/>
        </Routes>
      </div> 
    </div>
  );
}

export default App;
