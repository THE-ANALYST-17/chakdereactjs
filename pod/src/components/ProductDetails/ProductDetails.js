import React from 'react'
import Card from "../Cards/Card";
import { useState, useEffect } from "react";

const ProductDetails = (props) => {
    
    // const [user, setusers] = useState([]);
    
    // const userDetails = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //     setusers(await response.json());
    //   };
    //   console.log(user);
    //   useEffect(() => {
    //     userDetails();
    //   }, []);

    const user=[ {id: 1,quantity:"1", name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'},
    {id: 2,quantity:"1",name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv'},
    {id: 3,quantity:"1", name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net'},
    {id: 4,quantity:"1", name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org'},
    {id: 5,quantity:"1",name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca'},
    {id: 6, quantity:"1",name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info'},
    {id: 7,quantity:"1", name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz'},
    {id: 8,quantity:"1", name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me'},
    {id: 9,quantity:"1", name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io'},
    {id: 10,quantity:"1", name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz'}]

      
    
     
  return (
    <div>
        <div className="cards">
    {user.map((item, index) => {
      
      return (
        
        <Card
          key={index}
          k={item.id}
          firstName={item.name}
          phone={item.phone}
          username={item.username}
          web={item.website}
          update={()=>props.update(item)}
          counter={props.counter}
          quant={item.quantity}
        />
      );
    })}
  </div>
  </div>
  )
}

export default ProductDetails