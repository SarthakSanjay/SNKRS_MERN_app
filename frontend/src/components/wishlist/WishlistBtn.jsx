import React from 'react'
import {LiaHeart, LiaHeartSolid} from 'react-icons/lia'
const WishlistBtn = ({handleWishlist,btnActive}) => {
    console.log(btnActive)
  return (
    <button onClick={handleWishlist} className='w-52 h-10 bg-black rounded-full flex justify-center items-center text-white'>
        Favourite 
        {btnActive ? <LiaHeart className="ml-2 text-2xl text-white"/> : <LiaHeartSolid className="ml-2 text-2xl text-pink-700" />}
    </button>
  )
}
export default WishlistBtn