import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItems from "./CartItems";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../Notification";

const Cart = () => {
  // const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [ noti , setNoti] = useState("hidden")
  const [title , setTitle] = useState('')

  const dispatch = useDispatch();
  const { cart, loading, error ,totalAmount } = useSelector((state) => state.cart);
  // console.log("cart",cart)
if(cart.length === 0) {
  setTimeout(()=>{
    setNoti('hidden')
  },1200)
}
  const clearCart = () => {
    axios
      .delete("http://localhost:3000/cart/deleteAll")
      .then(setNoti(''))
      .then(dispatch(fetchCart()))
      .catch((e) => console.log(e.message));

      setTitle('cart cleared')
  };

  useEffect(() => {
    dispatch(fetchCart());
    
  }, [dispatch ,noti ,title ]);

  const calculateTotal = () => {
    let price = 0;
    cart.forEach((items) => {
      price += items.shoeId.price;
      setTotal(price);
      console.log(items.shoeId.price);
    });
  };

  if (loading) {
    return (
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <h1 className="text-white text-[40px]">Loading ...</h1>
      </div>
    );
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
    <Notification noti={noti} title={title} />
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
      <h1>Total: {totalAmount} </h1>
      <button
        className="bg-green-500 text-white p-2 rounded-[2px] hover:bg-green-700 "
        onClick={calculateTotal}
      >
        calculateTotal
      </button>
    </div>
  );
};

export default Cart;
