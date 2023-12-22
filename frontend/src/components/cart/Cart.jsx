import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItems from "./CartItems";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../Notification";
import Spinner from "../Spinner";
const Cart = () => {
  const [totalAmount , setTotalAmount] = useState(0)
  const dispatch = useDispatch();
  const { cart, loading, error  , quantity } = useSelector((state) => state.cart);
 console.log('carting ', cart)
  const clearCart = () => {
    axios
      .delete("http://localhost:3000/cart/deleteAll")
      // .then(setNoti(''))
      .then(dispatch(fetchCart()))
      .catch((e) => console.log(e.message));

      setTitle('cart cleared')
      dispatch(fetchCart())
  };
 
  

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(res => setTotalAmount(res.data.totalAmount))
      .catch(err => console.log(err.message))
    // dispatch(fetchCart());
        console.log('use effect rendered')
  }, [ cart]);


  if (loading) {
    return <Spinner />
  }
  if (error) {
    return (
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <h1 className="text-white text-[40px]">Something went wrong!!!</h1>
      </div>
    );
  }
  if(cart.length < 1){
    return <div className="bg-slate-900 min-h-screen text-white w-screen flex flex-col items-center p-10">
      No items
    </div>
  }
  return (
    <div className="bg-slate-900 min-h-screen text-white w-screen flex flex-col items-center p-10">
    {/* <Notification noti={noti} title={title} /> */}
      <button
        onClick={clearCart}
        
        className="bg-pink-700 text-white rounded-[4px] p-2 fixed right-10 "
      >
        Clear Cart
      </button>
      {cart.map((cartItem) => {
        return (
          <CartItems
            key={cartItem._id}
            cartItem={cartItem.shoeId}
            id={cartItem._id}
          />
        );
      })}
     
      <h1 className="absolute left-0 p-10 text-3xl">Total: ₹<span className="text-3xl text-green-400">{totalAmount}</span> </h1>
      {/* <button
        className="bg-green-500 text-white p-2 rounded-[2px] hover:bg-green-700 "
        // onClick={calculateTotal}
      >
        calculateTotal
      </button> */}
    </div>
  );
};

export default Cart;
