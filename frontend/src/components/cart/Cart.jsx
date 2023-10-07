import React, { useState, useEffect } from "react";
import axios from 'axios';
import CartItems from "./CartItems";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total , setTotal] = useState(0)
  

  useEffect(() => {
    // Fetch cart data when component mounts
    axios.get('http://localhost:3000/cart')
      .then((response) => {
        console.log(response.data.shoe);
        setCart(response.data.shoe);
        // return response.data.shoe
      })
      // .then(res => console.log(res))
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []);  // Empty dependency array to ensure this runs once when component mounts
  
  const calculateTotal = () =>{
    let price = 0
    cart.forEach((items) => {
      price += items.shoeId.price
      setTotal(price)
      console.log(items.shoeId.price)
    })
  }

  return (
    <div className='bg-slate-900 min-h-screen text-white w-screen flex flex-col items-center p-10'>
      {cart.map((cartItem) => {
        return <CartItems key={cartItem._id} cartItem={cartItem.shoeId} id={cartItem._id} />
      })}
      <h1>Total: {total} </h1>
      <button className="bg-green-500 text-white p-2 rounded-[2px] hover:bg-green-700 " onClick={calculateTotal}>calculateTotal</button>
    </div>
  );
}

export default Cart;
