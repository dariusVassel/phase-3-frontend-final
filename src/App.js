import { Route, Routes } from "react-router";
import React, { useState, useEffect } from "react";

import Home from "./components/Home/Home"
import OrderList from "./components/OrderList/OrderList"
import NavBar from "./components/NavBar/NavBar";


function App() {
  const [orders, setOrders] = useState()

  //FETCH DATA
  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then(resp => resp.json())
      .then(data => {
        setOrders(data)
      })
  }, [])

  return (
    <div className="App">
      <h1>hey</h1>
      <NavBar/>
      <Routes>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/orders'>
          <OrderList/>
        </Route>
        </Routes>
    </div>
  );
}

export default App;
