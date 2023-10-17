import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishlistBtn from "./wishlist/WishlistBtn";
import AddToCartBtn from "./cart/AddToCartBtn";
import axios from "axios";

const ShoesDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [wishlisted , setWishlisted] = useState(false)

  // console.log(image)
  const handleClick = (e) => {
    setImage(e.target.src);
    console.log(e.target.src);
  };

 
  const addToCart = () => {
    axios.post("http://localhost:3000/cart/add", {
      _id: id,
    });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/shoe/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setProduct(response.shoe);
        setImage(response.shoe.image[0]);
        setWishlisted(response.shoe.wishlisted)

        // console.log(response.shoe)
      })
      .catch((e) => console.log(e.message));
  }, [id]);


  return (
    <div className="h-screen w-screen bg-slate-900 p-10 flex ">
      <div className="h-3/4 w-1/2 flex p-4 justify-evenly">
        <div className="h-full w-1/6 p-2 ">
          {product.image && product.image.length > 0 && (
            <>
              <img
                className="mt-2"
                src={`${product.image[0]}`}
                onClick={handleClick}
              />
              <img
                className="mt-2"
                src={`${product.image[1]}`}
                onClick={handleClick}
              />
              <img
                className="mt-2"
                src={`${product.image[2]}`}
                onClick={handleClick}
              />
            </>
          )}
        </div>
        <img src={image} />
      </div>

      <div className=" w-1/2 p-4 text-white">
        <h1 className="text-4xl">{product.productName}</h1>
        <br />
        <h2>{product.category}&apos;s Shoes</h2>
        <br />
        <h1>MRP: ${product.price}</h1>
        <br />
        <h2>Rating: {product.rating} </h2>
        <br />
        <WishlistBtn text={true}  id={id} wishlisted={wishlisted} />
        <br />
        <AddToCartBtn addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ShoesDetails;
