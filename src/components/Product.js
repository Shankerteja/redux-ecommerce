import React from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../store/cartSlice.js'
import {useState,useEffect } from 'react'
import {Card,Button} from 'react-bootstrap'
import NavbarSection from './NavbarSection.js'
function Product() {

    const [products,getPro]=useState([])
    const dispatch=useDispatch()

    const getToCart=(productDetails)=>{
        dispatch(add(productDetails))

    }
    useEffect(()=>{
     const   getProducts=async ()=>{
            const options={
                method:'GET'
            }
            const url='https://fakestoreapi.com/products'
            const response=await fetch(url,options)
            const data=await response.json()
            getPro(data)
        }
        getProducts()
    },[])

    const cards=products.map((eachItem)=>{
     return   <div className='col-md-3' >

<Card className='h-100'>
      <Card.Img variant="top" src={eachItem.image} style={{height:'130px',width:'100px' ,margin:'auto'}}/>
      <Card.Body>
        <Card.Title>{eachItem.title}</Card.Title>
        <Card.Text>
        PRICE:  {eachItem.price}$
        </Card.Text>
        <Button variant="primary" onClick={()=>getToCart(eachItem)}>Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
    })
  return (
    <div>
       <NavbarSection/>
       <h1 className='heading'>Products </h1>
        <div className='row'>
            {cards}
           
        </div>
    </div>
  )
}

export default Product