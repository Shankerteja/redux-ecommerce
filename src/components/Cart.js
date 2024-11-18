import React from 'react'
import NavbarSection from './NavbarSection'
import { useSelector } from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'
function Cart() {
    
    const cartList=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const removeItem=(id)=>{
        dispatch(remove(id))

    }
    const carts=cartList.map((eachItem)=>{
        return   <div className='col-md-3' >
   
   <Card className='h-100'>
         <Card.Img variant="top" src={eachItem.image} style={{height:'130px',width:'100px' ,margin:'auto'}}/>
         <Card.Body>
           <Card.Title>{eachItem.title}</Card.Title>
           <Card.Text>
           PRICE:  {eachItem.price}$
           </Card.Text>
           <Button variant="danger" onClick={()=>removeItem(eachItem.id)}>Remove</Button>
         </Card.Body>
       </Card>
           </div>
       })
  return (
    <div>
        
<NavbarSection/>
<h1>
            Cart
        </h1>
        <div className='row'>
            {carts}
        </div>
        <div>

        </div>
    </div>
  )
}

export default Cart