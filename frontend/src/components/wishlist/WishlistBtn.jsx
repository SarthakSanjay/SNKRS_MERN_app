import { useState } from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { fetchWishlist } from "../../store/wishlistSlice";
import { fetchShoes } from "../../store/shoeSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
//on button click 1. add it to wishlist and change the wishlisted to true
//on again button click remove it from wishlist and change the wishlisted to false

const WishlistBtn = ({  text , id ,wishlisted }) => {
  const dispatch = useDispatch()

  const addToWishlist = () =>{
    axios.post(`http://localhost:3000/wishlist/add/${id}`)
    .then(()=>{
      dispatch(fetchShoes(`http://localhost:3000/shoe/all`))
    dispatch(fetchWishlist())
    })
  }
  
  const deleteFromWishlist = () =>{
    console.log(id)
    axios.post(`http://localhost:3000/wishlist/remove/${id}`)
    .then(()=>{
      dispatch(fetchShoes(`http://localhost:3000/shoe/all`))
    dispatch(fetchWishlist())
    })
  }

  const handleClick = () => {
  if(wishlisted){
    deleteFromWishlist()
  }else{
    addToWishlist()
  }
}

  if (!text) {
    return (
      <button
        onClick={handleClick}
        className="w-10 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white"
      >
        {wishlisted ? (
          <LiaHeartSolid className=" text-2xl text-pink-400" />
        ) : (
          <LiaHeart className="text-2xl " />
        )}
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      className="w-52 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white"
    >
      {text ? "Favourite" : ""}
      {wishlisted ? (
        <LiaHeartSolid className="ml-2 text-2xl text-pink-400" />
      ) : (
        <LiaHeart className="ml-2 text-2xl " />
      )}
    </button>
  );
};
export default WishlistBtn;
