import React from 'react'
import Card from '../Cards/Card';

const Main = (props) => {
    const {products}=props;

  return (
    <div>
        {products.map((product)=>{
            return(
            <Card key={product.id} product={product}/>
            )
        })}
    </div>
  )
}

export default Main