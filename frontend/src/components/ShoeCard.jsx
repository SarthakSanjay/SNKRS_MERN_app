import { Link } from "react-router-dom";
import WishlistBtn from "./wishlist/WishlistBtn";
import axios from "axios";
import { fetchWishlist } from "../store/wishlistSlice";
import { useDispatch } from "react-redux";
import {AiOutlineDelete} from 'react-icons/ai'
const ShoeCard = ({ shoe, id, wishlisted, inWishlist }) => {
  const dispatch = useDispatch()
  if (!shoe) {
    return null;
  }
  const deleteFromWishlist = () => {
    axios.delete(`http://localhost:3000/wishlist/remove/${id}`)
      .then(() => {
        alert('Removed from wishlist');
        dispatch(fetchWishlist());
      })
      .catch(error => {
        console.error('Error removing from wishlist:', error);
      });
  
   
  }
  const updateWishlisted = () =>{
    axios.patch(`http://localhost:3000/shoe/${shoe._id}`, { wishlisted: false })
    .then(() => {
      console.log('Updated successfully');
    })
    .catch(error => {
      console.error('Error updating wishlisted status:', error);
    });
  }  

  const handleDelete = () =>{
    deleteFromWishlist()
    updateWishlisted()
  }
  const { productName, price, image } = shoe;
  return (
    <>
      <div className=" h-max w-52 m-10 cursor-pointer text-white">
        <Link to={`/shoe/${id}`}>
          <img
            src={image[0]}
            className="w-full object-cover h-40"
          />
          <h3 className="ml-2 p-1">{productName}</h3>
          <h3 className="ml-2 p-1">Price: ${price}</h3>
        </Link>
        <div className=" relative left-40 bottom-12  ">
          {inWishlist ? (
            <button
              onClick={handleDelete}
              className="bg-red-900 h-[40px] w-10 flex justify-center items-center  rounded-[2px] hover:bg-red-500
              
              "
            >
              <AiOutlineDelete />
            </button>
          ) : (
            <WishlistBtn text={false} id={id} wishlisted={wishlisted} />
          )}
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
