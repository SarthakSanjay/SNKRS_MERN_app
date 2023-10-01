import React, { useState } from 'react'
import {LiaHeart, LiaHeartSolid} from 'react-icons/lia'
const WishlistBtn = ({handleWishlist}) => {
  const [clicked ,setClicked] = useState(false)
    // console.log(btnActive)
    const handleClick = () =>{
      setClicked(prev => !prev)
      handleWishlist()
    }
  return (
    <button onClick={handleClick }  className='w-52 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white'>
        Favourite 
        {!clicked ? <LiaHeart className="ml-2 text-2xl "/> : <LiaHeartSolid className="ml-2 text-2xl text-pink-400" />}
    </button>
  )
}
export default WishlistBtn