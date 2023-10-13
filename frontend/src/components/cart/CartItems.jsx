import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalAmount,
  increase,
  decrease,
} from "../../store/cartSlice";

const CartItems = ({ cartItem, id }) => {
  const dispatch = useDispatch();
  const {quantity} = useSelector(state => state.cart)
  // const {totalAmount} = useSelector(state => state.cart)
  // const [quantity , setQuantity] = useState(1)
  // const [amount , setAmount] = useState(cartItem.price)
  useEffect(() => {
    // setAmount(cartItem.price * quantity);

    dispatch(calculateTotalAmount(quantity));
    // console.log(totalAmount);
  }, [quantity, cartItem.price]);

  // console.log('cartitems', cartItem)
  const delShoeFromCart = () => {
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then(console.log("item deleted"))
      .then(dispatch(fetchCart()));
    alert("item deleted");
  };
  // const increment = () =>{
  //     setQuantity(quantity + 1)

  // }
  // const decrement = () =>{
  //     if(quantity === 1) return
  //     setQuantity(quantity - 1)
  // }
  return (
    <div className="bg-gray-800 h-[100px] w-[500px] flex justify-between items-center m-5 ">
      <img src={cartItem.image[0]} className="h-full w-1/5 object-center " />
      <div className="flex flex-col justify-around h-full ">
        <h2>{cartItem.productName}</h2>
        <div className="bg-red-400 w-[120px] rounded-[5px] flex justify-between p-2">
          <button
            onClick={() => {
                dispatch(increase(id))
                dispatch(fetchCart())
            }}
            className="bg-gray-500 border-[1px] border-black rounded-[2px]"
          >
            <AiOutlineArrowUp />
          </button>
          Qty : {quantity}
          <button
            onClick={()=>{

                dispatch(decrease(id))
            }}
            className="bg-gray-500 border-[1px] border-black rounded-[2px]"
          >
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
      {/* <h1>${amount}</h1> */}

      <button
        onClick={delShoeFromCart}
        className="bg-red-900 h-[40px] w-20  p-2 mr-2 rounded-[2px] hover:bg-red-500"
      >
        remove
      </button>
    </div>
  );
};

export default CartItems;
