import React, { useState } from 'react'
import {AiOutlineArrowUp ,AiOutlineArrowDown} from 'react-icons/ai'
import axios from 'axios'
const CartItems = ({cartItem,id}) => {
    const [quantity , setQuantity] = useState(0)
    // console.log('cartitems', cartItem)
    const delShoeFromCart = () =>{
        axios.delete(`http://localhost:3000/cart/${id}`)
        .then(console.log("item deleted"))
        alert('item deleted')
    }
  return (
    <div className='bg-gray-800 h-[100px] w-[500px] flex justify-between items-center m-5 '>
        <img src={cartItem.image[0]} className='h-full w-1/5 object-center ' />
        <div className='flex flex-col justify-around h-full '>
        <h2>{cartItem.productName}</h2>
        <div className='bg-red-400 w-[120px] rounded-[5px] flex justify-between p-2'>
            <button onClick={()=>{setQuantity(quantity + 1)}} className='bg-gray-500 border-[1px] border-black rounded-[2px]'>
                <AiOutlineArrowUp />
            </button>
            Qty : {quantity}
            <button onClick={()=>{
                if(quantity < 1) return
                setQuantity(quantity - 1)
                }} className='bg-gray-500 border-[1px] border-black rounded-[2px]'>
                <AiOutlineArrowDown />
            </button>
        </div>
        </div>
            <h1>${cartItem.price}</h1>
            <button onClick={delShoeFromCart} className='bg-red-900 h-[40px] w-20  p-2 mr-2 rounded-[2px] hover:bg-red-500'>remove</button>
    </div>
  )
}

export default CartItems