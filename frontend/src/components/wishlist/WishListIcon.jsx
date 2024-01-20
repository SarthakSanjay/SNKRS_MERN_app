import { Link } from "react-router-dom";
import { LiaHeart } from "react-icons/lia";
import { useEffect } from "react";
import { fetchWishlist } from "../../store/wishlistSlice";
import { useDispatch , useSelector } from "react-redux";
const WishListIcon = () => {
  const dispatch = useDispatch()
  const {shoe} = useSelector((state) => state.wishlist)
  useEffect(() => {
    dispatch(fetchWishlist())

  }, [shoe.lenght,dispatch]);

  return (
    <Link to="/wishlist">
      <div className="  h-14 w-14 flex justify-center items-center ">
        <LiaHeart className="text-3xl text-white absolute " />
        {shoe.length?
          <div className="text-white relative bottom-3 left-3  rounded-full bg-pink-500 w-5 h-5 flex justify-center items-center ">
          {shoe.length}
        </div>
         : ""}
        
      </div>
    </Link>
  );
};

export default WishListIcon;
