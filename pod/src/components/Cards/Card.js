import React, { useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import "./card.css";

const Card = (props) => {
  // const [state,setState] = useState(0);
  
  return (
    
        
            <div className="card-elements">
            <p>{props.firstName}</p>
            <p>{props.phone}</p>
            <p>{props.username}</p>
            <p>{props.web}</p>
            <p>{props.k}</p>
            {/* <h1>{props.counter}</h1> */}
          {/* <button className="btn1" onClick={props.update}>Add</button> */}
          <AddToCart update={props.update} counter={props.counter} user={props.user}/>
          {/* <p>{props.st}</p> */}
            </div>
          
        
        
        
          
        
      // <div className="data">
      //   <h2>{props.firstName}</h2>
      // </div>
    
  );
};

export default Card;
