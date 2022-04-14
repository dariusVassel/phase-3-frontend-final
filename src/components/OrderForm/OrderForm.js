import React, {useState} from 'react'
import {Button, TextField} from '@mui/material'



const OrderForm = ({pushSubmit}) => {
  const [formData, setFormData] = useState({
    PO: 0,
    quantity: 0,
    price: 0,
    product_id: 0,
    importer_id: 0,
    date: 0,
    specification : ""
  })

  

  function handleSubmit(e){
    e.preventDefault()

    console.log(e.target)

    const formDataSubmit = {
    PO: formData.PO,
    quantity: formData.quantity,
    price: formData.price,
    product_id: formData.product_id,
    importer_id: formData.importer_id,
    date: formData.date,
    specification : formData.specification
    }

    const dataArray = formDataSubmit


    console.log(formDataSubmit)

    pushSubmit(dataArray)


    setFormData({
      PO: 0,
      quantity: 0,
      price: 0,
      product_id: 0,
      importer_id: 0,
      date: 0,
      specification : ""
    })
  }

  function handleFormData(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value

    setFormData({
        ...formData,
        [name] : value
    })
  }

  return (
    <div>
      <h1>OrderForm</h1>
      <form>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="PO" name = "PO" onChange={handleFormData} value = {formData.PO}/>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Quantity" name = "quantity" onChange={handleFormData} value = {formData.quantity}/>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Price" name = "price" onChange={handleFormData} value = {formData.price}/>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Product ID" name = "product_id" onChange={handleFormData} value = {formData.product_id}/>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Importer ID" name = "importer_id" onChange={handleFormData} value = {formData.importer_id}/>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Date (YYMMDD)" name = "date" onChange={handleFormData} value = {formData.date}/>
        <TextField fullWidth variant = "outlined" size ="small"  margin ="dense" label ="Specification" name = "specification" onChange={handleFormData} value = {formData.specification}/>
        <br/><br/>
        <Button color="primary" variant ="contained" onClick = {handleSubmit}>Submit Order</Button>
      </form>
    </div>
  )
}

export default OrderForm