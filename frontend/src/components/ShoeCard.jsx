import { Link } from "react-router-dom";
import WishlistBtn from "./wishlist/WishlistBtn";

const ShoeCard = ({ shoe, id }) => {
  if (!shoe) {
    return null; 
  }
  const { productName, price, image } = shoe;
  return (
    <>
      <div className=" h-max w-52 m-10 cursor-pointer text-white">
        <Link to={`/shoe/${id}`}>
          <img src={image[1]} className="w-full object-cover h-40" />
          <h3 className="ml-2 p-1">{productName}</h3>
          <h3 className="ml-2 p-1">Price: ${price}</h3>
        </Link>
        <div className=" relative left-40 bottom-12 ">
          <WishlistBtn text={false} id={id} />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;