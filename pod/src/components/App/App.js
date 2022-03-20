import React from "react";
import Nav from "../Navbar/Nav";
import Card from "../Cards/Card";
import Cart from "../Cart/Cart";
// import ProductDetails from "../ProductDetails/ProductDetails";
// import Data from '../Data/Data'
import { useState, useEffect } from "react";
import { FaProductHunt } from "react-icons/fa";
const App = () => {
  // const [idkavalue,setIdkavalue]=useState([{id:0}])
  const [counter, setCounter] = useState(0);
  const [store, setStore] = useState([]);
  const [show, setShow] = useState(false);
  // const userDetails = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   setusers(await response.json());
  // };
  // // console.log(user);
  // useEffect(() => {
  //   userDetails();
  // }, []);
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

  const [state, setState] = useState(0);
  function updateState(item) {
    
    console.log("user ko check kar rahe hai",user);
    // setStore(store.concat(item));
    const index=store.findIndex(item => item.id === user.id)
    console.log(index);
    if(index===-1){
      const updatecartvalue=store.concat({...user,quantity:1});
      setStore(updatecartvalue)
    }else{
      store[index].quantity+=1;
      const updatecartvalue=[...store];
      setStore(updatecartvalue)
    }
    const newupdatestate = (oldstate) => {
      return oldstate + 1;
    };
    setState(newupdatestate);
    // if(item.id===store[item.id])
    console.log(store[item.id],item.id);
    setCounter(counter+1)

    // console.log(store[item.id],item.id);
  }
  // console.log(store[item.id],item.id);
  console.log(state);


  function updateCart() {
    setShow(true);
  }

  
  return (
    <>
      {/* st={state} updateCart={updateCart} */}
      <Nav st={state} updateCart={updateCart} />
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
              update={()=>updateState(item)}
              user={user}
            />
          );
        })}
      </div>
      {/* <Card/> */}
      {/* <ProductDetails
        update={updateState}
        counter={counter}
        /> */}
      {show ? <Cart store={store} /> : ""}
    </>
  );
};
export default App;
