import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  const {product}=props
  console.log(product);
  return (
    <div className="card-elements">
      <p>{product.name}</p>
      <p>{product.username}</p>
      <p>{product.id}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Card;
