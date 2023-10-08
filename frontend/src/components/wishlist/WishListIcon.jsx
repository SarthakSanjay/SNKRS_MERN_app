import { Link } from "react-router-dom";
import { LiaHeart } from "react-icons/lia";
import { useEffect } from "react";
import { fetchWishlist } from "../../store/wishlistSlice";
import { useDispatch , useSelector } from "react-redux";
const WishListIcon = () => {
  const dispatch = useDispatch()
  const {total} = useSelector((state) => state.wishlist)
  useEffect(() => {
    dispatch(fetchWishlist())

  }, []);

  return (
    <Link to="/wishlist">
      <div className=" h-10 w-20 flex justify-center items-center  relative text-white">
        <LiaHeart className=" text-3xl " />
        <div className="w-5 h-5 bg-pink-400 text-white flex justify-center items-center rounded-full absolute top-0 right-4">
          {total}
        </div>
      </div>
    </Link>
  );
};

export default WishListIcon;
