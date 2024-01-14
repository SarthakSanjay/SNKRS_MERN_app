import { Link } from "react-router-dom";
import WishlistBtn from "../wishlist/WishlistBtn";
import axios from "axios";
import { fetchWishlist } from "../../store/wishlistSlice";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import Cookies from "js-cookie";
import { getCookie } from "../../utils/cookie";
const ShoeCard = ({
  shoe,
  wid,
  // , id, wishlisted,
  inWishlist,
}) => {
  const { _id, productName, price, image, color, wishlisted } = shoe;
  const dispatch = useDispatch();

  if (!shoe) {
    return null;
  }

  const handleDelete = async () => {
    console.log('c');
    await axios.delete(`http://localhost:3000/wishlist/remove/?shoeId=${_id}&userId=${getCookie('userId')}`);
    dispatch(fetchWishlist);
  };

  let colors = color && color.split("/");

  return (
    <>
      <div className=" h-72 w-52 m-10 cursor-pointer  bg-white/5 rounded-lg text-white">
        <Link to={`/shoe/${_id}`}>
          <img src={image[0]} className="w-full   object-cover rounded-t-md h-40"/>
          <div className="flex flex-col justify-evenly  h-32 ">
              <h3 className="  w-full p-1">{productName}</h3>
              <div className="flex ">
                  <h3 className="ml-2 p-1">Price: <span className="text-green-500">${price}</span></h3>
              <div className="h-12 w-14   flex">
              <div className={`w-6 h-6 border-[1px] border-white ml-1   rounded-full`} style={{ backgroundColor: colors[0].toLowerCase() }}></div>
                  <p className={`w-6 h-6 border-[1px] border-white ml-1 rounded-full`} style={{
                  backgroundColor: colors[1]
                    ? colors[1].toLowerCase()
                    : "white",
                }}
                  ></p>
              </div>
          </div>
        </div>
        </Link>

        <div className=" relative left-40 bottom-12  ">
          {inWishlist ? (
            <button
              onClick={handleDelete}
              className="bg-red-900 h-[40px] w-10 flex justify-center items-center  rounded-[2px] hover:bg-red-500"
            >
              <AiOutlineDelete />
            </button>
          ) : (
            <WishlistBtn text={false} id={_id} wishlisted={wishlisted} />
          )}
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
