import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { getCookie } from "../../utils/cookie";

const CartItems = ({ cartItem, id }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productName, image ,price , _id } = cartItem;
  const fetchQuantity = async() =>{
    try {
      const res = await axios.get(`http://localhost:3000/cart/quantity?userId=${getCookie('userId')}`)
      setQuantity(res.data.shoeObject[_id])
      
    } catch (error) {
      console.log(error.message)
      
    }
  }
 
  const handleIncrease = () => {
    axios.post(`http://localhost:3000/cart/add?shoeId=${_id}&userId=${getCookie('userId')}`)
    .then(() =>{
      fetchQuantity()
      // dispatch(fetchCart())
    })
  };
  
  const handleDecrease = () => {
    
    axios.delete(`http://localhost:3000/cart/delete?shoeId=${_id}&userId=${getCookie('userId')}`)
    .then(() =>{
      fetchQuantity()
      // dispatch(fetchCart())
    })

  };
  
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/cart/${id}`).then(() => {

    });
    dispatch(fetchCart())
  };

  useEffect(() => {
    fetchQuantity()
  }, []); 

 

  return (
    <div className="bg-gray-800 h-[100px] w-[500px] flex justify-between items-center m-5">
      <img src={image[0]} className="h-full w-1/5 object-center" />
      <div className="flex flex-col justify-around h-full">
        <h2 className="w-[120px] ">{productName}</h2>
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
            className="bg-gray-500 border-[1px] border-black rounded-[2px] disabled:opacity-60 "
            disabled={quantity == 1 ? true : false}
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
