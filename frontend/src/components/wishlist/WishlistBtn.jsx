import { useEffect, useState } from "react";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { fetchWishlist } from "../../store/wishlistSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const WishlistBtn = ({  text , id}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  
   const getWishlist = () => {
    axios.post("http://localhost:3000/wishlist/add", {
      _id: id,
    });
  };
  const handleClick = () => {
    getWishlist()
    alert("added to wishlist");
    dispatch(fetchWishlist());

  };

  useEffect(()=>{
    axios.get('http://localhost:3000/wishlist')
    .then((res) => {
      if(res.data.shoe._id === id){
        setClicked(true)
      }else{
        setClicked(false)
      }
    })
  },[])


  if (!text) {
    return (
      <button
        onClick={handleClick}
        className="w-10 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white"
      >
        {!clicked ? (
          <LiaHeart className="text-2xl " />
        ) : (
          <LiaHeartSolid className=" text-2xl text-pink-400" />
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
      {!clicked ? (
        <LiaHeart className="ml-2 text-2xl " />
      ) : (
        <LiaHeartSolid className="ml-2 text-2xl text-pink-400" />
      )}
    </button>
  );
};
export default WishlistBtn;
