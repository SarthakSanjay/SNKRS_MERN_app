import React from 'react'
import {LiaHeart} from 'react-icons/lia'
const WishlistBtn = ({handleWishlist}) => {
  return (
    <button onClick={handleWishlist} className='w-52 h-10 bg-black rounded-full flex justify-center items-center text-white'>
        Favourite <LiaHeart className="ml-2 text-2xl text-white"/>
    </button>
  )
}

export default WishlistBtn