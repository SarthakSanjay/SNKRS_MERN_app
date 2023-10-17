import { useState } from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { fetchWishlist } from "../../store/wishlistSlice";
import { fetchShoes } from "../../store/shoeSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const WishlistBtn = ({  text , id ,wishlisted  }) => {
  const dispatch = useDispatch()
  const [clicked , setClicked] = useState(true)
  const addToWishlist = () =>{
    axios.post(`http://localhost:3000/wishlist/add`,{
      _id: id
    })
    .then(alert('added to wishlist'))
    .then(dispatch(fetchShoes()))
  }
  const deleteFromWishlist = () =>{
    axios.delete(`http://localhost:3000/wishlist/remove/${id}`)
    .then(alert('removed form wishlist'))
  }

  const updateWishlisted = (wishlisted) =>{
    axios.patch(`http://localhost:3000/shoe/${id}`,{
      wishlisted : wishlisted
    })
  }


  const handleClick = () => {
    if (clicked) {
      addToWishlist();
      setClicked(false);
      updateWishlisted(true)
      dispatch(fetchShoes());
      dispatch(fetchWishlist())
    } else {
      deleteFromWishlist();
      setClicked(true);
      updateWishlisted(false)
      dispatch(fetchShoes());
      dispatch(fetchWishlist())
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
