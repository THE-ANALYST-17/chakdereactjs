import React from 'react'

const AddToCart = (props) => {
  return (
      <>
      <button>+</button>
      <button onClick={()=>props.update(props.user)}>AddToCart</button>
      <button>-</button>

      <p>{props.counter}</p>
      </>
    
  )
}

export default AddToCart