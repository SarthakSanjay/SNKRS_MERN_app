import React, { useEffect } from "react";
import ShoeCard from "../ShoeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../../store/wishlistSlice";
import { deleteAll } from "../../store/wishlistSlice";
import axios from "axios";
import Spinner from "../Spinner";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { loading, shoe, error } = useSelector((state) => state.wishlist);
  // console.log('shoe', shoe)
  const deleteAll = () => {
    axios
      .delete("http://localhost:3000/wishlist/deleteAll")
      .then(console.log("deletedALl"))
      .then(dispatch(fetchWishlist()))
      .catch((e) => console.log(e.message));
  };
  const handleDelete = () => {
    changeWishlisted();
    deleteAll();
    dispatch(fetchWishlist());
  };
  const changeWishlisted = async () => {
    await axios
      .get("http://localhost:3000/shoe/all")
      .then((res) => {
        console.log("res", res.data.shoes);

        res.data.shoes.forEach((item) => {
          axios
            .patch(`http://localhost:3000/shoe/${item._id}`, {
              wishlisted: false,
            })
            .then(console.log("updated successfully"));
        });
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  if (loading) {
    return <Spinner />
    
  }
  if (error) {
    return (
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <h1 className="text-white text-[40px]">Something went wrong!!!</h1>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-screen p-10 flex flex-wrap">
        <button
          onClick={handleDelete}
          className="bg-pink-700 text-white rounded-[4px] p-2 fixed right-10 "
        >
          Clear wishlist
        </button>
        {shoe &&
          shoe.map((wishlistItem) => {
            {
              /* console.log(wishlistItem.shoeId.productName) */
            }
            return (
              <ShoeCard
                key={wishlistItem._id}
                shoe={wishlistItem.shoeId}
                wid={wishlistItem._id}
                inWishlist={true}
              />
            );
          })}
      </div>
    </>
  );
};

export default Wishlist;
