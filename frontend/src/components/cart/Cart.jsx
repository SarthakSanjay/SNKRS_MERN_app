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

  return (
    <div className='bg-slate-900 min-h-screen text-white w-screen flex flex-col items-center p-10'>
      {cart.map((cartItem) => {
        {/* setTotal( cartItem.shoeId.price) */}
        

        return <CartItems key={cartItem._id} cartItem={cartItem.shoeId} id={cartItem._id} />
      })}
      {total}
    </div>
  );
}

export default Cart;
