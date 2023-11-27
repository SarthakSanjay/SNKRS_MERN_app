import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import { increase, decrease } from "../../store/cartSlice";

const CartItems = ({ cartItem, id }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const {amount} = useSelector(store => store.cart)
  const { productName, image ,price} = cartItem;
 

  const updateQuantity = (newQuantity) => {
    axios.patch(`http://localhost:3000/cart/${id}`, { quantity: newQuantity });
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateQuantity(quantity + 1);
    dispatch(fetchCart())
    console.log("clicked up")
  };
  
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateQuantity(quantity - 1);
    }
    if(quantity === 0){
      handleDelete()
      dispatch(fetchCart())
    } 
    dispatch(fetchCart())
    console.log("clicked down")
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/cart/${id}`).then(() => {
      console.log("Item deleted");
    });
    dispatch(fetchCart())
  };

  
  
  useEffect(() => {
    const fetchQuantity = () => {
      axios.get(`http://localhost:3000/cart/${id}`).then((res) => {
        setQuantity(res.data.shoe.quantity);
      });
    };
    fetchQuantity();
  }, [id ,quantity ]); // Only fetch quantity when id changes

 

  return (
    <div className="bg-gray-800 h-[100px] w-[500px] flex justify-between items-center m-5">
      <img src={image[0]} className="h-full w-1/5 object-center" />
      <div className="flex flex-col justify-around h-full">
        <h2>{productName}</h2>
        <div className="bg-red-400 w-[120px] rounded-[5px] flex justify-between p-2">
          <button
            onClick={handleIncrease}
            className="bg-gray-500 border-[1px] border-black rounded-[2px]"
          >
            <AiOutlineArrowUp />
          </button>
          Qty : {quantity}
          <button
            onClick={handleDecrease}
            className="bg-gray-500 border-[1px] border-black rounded-[2px]"
          >
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
      <div>
      <p className="text-[12px]">Price :${price }</p>
      <h1 className="text-[12px]">Amount :${price * quantity}</h1>
      <button
        onClick={handleDelete}
        className="bg-red-900 h-[40px] w-20 p-2 mr-2 rounded-[2px] hover:bg-red-500"
      >
        remove
      </button>
      </div>
    </div>
  );
};

export default CartItems;
