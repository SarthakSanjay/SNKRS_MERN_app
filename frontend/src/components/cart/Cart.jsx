import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CartItems from "./CartItems";
import { fetchCart, fetchTotalAmount } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Misc/Spinner";
import { getCookie } from "../../utils/cookie";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, loading, error ,totalAmount } = useSelector((state) => state.cart);
// console.log(loading);
  const clearCart = () => {
    axios
      .delete("http://localhost:3000/cart/deleteAll")
      .then(dispatch(fetchCart()))
      .catch((e) => console.log(e.message));
  };
 
  

  useEffect(() => {
        dispatch(fetchCart())
        dispatch(fetchTotalAmount())
  }, [cart , totalAmount]);


  // if (loading) {
  //   return <Spinner />
  // }
  if (error) {
    return (
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <h1 className="text-white text-[40px]">Something went wrong!!!</h1>
        <p className="text-white">{error.message}</p>
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
      {cart && cart.map((cartItem) => {
        return (
          <CartItems
            key={cartItem._id}
            cartItem={cartItem}
            cart={cart}
          />
        );
      })}
      <div className="absolute right-0 p-10 mt-16 border w-1/4 bg-blue-500/25 m-5 rounded-xl ">
      <h1 className="text-3xl">Total: ₹<span className="text-3xl text-green-400">{totalAmount}</span> </h1>
      <button
        className="bg-green-500 w-24 text-white p-2 rounded-full hover:bg-green-700 "

      >
      Buy
      </button>
      </div>
     
    </div>
  );
};

export default Cart;
