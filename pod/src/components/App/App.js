import React from "react";
import Nav from "../Navbar/Nav";
// import Card from "../Cards/Card";
import CartItems from "../CartItems/CartItems";
import Main from "../Main/Main";
import data from '../Data/Data'

import { FaProductHunt } from "react-icons/fa";
const App = () => {
  // console.log(data);
  //Doubt -How product is an arry if we area assigning it to data.
  const {products}=data;
  console.log(products);
  return (
    <>
      <Nav/>
      <Main products={products}/>
      <CartItems/>
    </>
  );
}
export default App;
