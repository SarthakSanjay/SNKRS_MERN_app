import { useEffect, useState } from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { fetchWishlist } from "../../store/wishlistSlice";
import { fetchShoes } from "../../store/shoeSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { getCookie } from "../../utils/cookie";
//on button click 1. add it to wishlist and change the wishlisted to true
//on again button click remove it from wishlist and change the wishlisted to false

const WishlistBtn = ({  text , id   }) => {
  const dispatch = useDispatch()
  const {shoe} = useSelector(state => state.wishlist)
  const [inWishlist , setInWishlist] = useState(false)
  const addToWishlist = () =>{
    axios.post(`http://localhost:3000/wishlist/add/${id}`,{
      userId : Cookies.get("userId")
    })
    .then(()=>{
      dispatch(fetchShoes(`http://localhost:3000/shoe/all`))
    dispatch(fetchWishlist())
    })
  }
  
  const deleteFromWishlist = () =>{
    console.log(id)
     axios.delete(`http://localhost:3000/wishlist/remove/?shoeId=${id}&userId=${getCookie('userId')}`)
    .then(()=>{
      dispatch(fetchShoes(`http://localhost:3000/shoe/all`))
    dispatch(fetchWishlist())
    })
  }

  const handleClick = () => {
  if(inWishlist){
    deleteFromWishlist()
  }else{
    addToWishlist()
  }
}
useEffect(() => {
  setInWishlist(shoe.some(shoe => shoe._id === id))
}, [ id ,   shoe , inWishlist]);
 
  if (!text) {
    return (
      <button
        onClick={handleClick}
        className="w-10 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white"
      >
        {inWishlist ? (
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
      {inWishlist ? (
        <LiaHeartSolid className="ml-2 text-2xl text-pink-400" />
      ) : (
        <LiaHeart className="ml-2 text-2xl " />
      )}
    </button>
  );
};
export default WishlistBtn;
