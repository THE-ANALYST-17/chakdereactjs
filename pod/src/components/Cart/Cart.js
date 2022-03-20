import React from 'react'
import "./cart.css";
const Cart = (props) => {
  return (
    <div>{props.store.map((item,index)=>{
      console.log("checking for quantity",item.quantity);
        return(
            <div className='main-cart'>
            <h1>{item.name}</h1>
            <h1>{item.phone}</h1>
            <h1>{item.web}</h1>
            <button onClick={props.update}>+</button>
            <button>-</button>
            <h4>{item.quantity}</h4>
            </div>
            
            
        )
    })}</div>
  )
}

export default Cart