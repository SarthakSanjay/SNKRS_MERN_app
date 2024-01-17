import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishlistBtn from "../wishlist/WishlistBtn";
import AddToCartBtn from "../cart/AddToCartBtn";
import axios from "axios";
import {  useDispatch, useSelector } from "react-redux";
import Spinner from "../Misc/Spinner";
import { getCookie } from "../../utils/cookie";
import CartIcon from "../cart/CartIcon";
import Notification from "../Misc/Notification";
import Review from "../reviews/review";

const ShoesDetails = () => {
  const { id } = useParams();
  const [shoes , setShoes] = useState('')
  // console.log(shoes)
  const {cart} = useSelector((state) => state.cart)
  const [inCart , setInCart] = useState(false)
  const { shoe, loading, error } = useSelector((state) => state.wishlist);
  const [addedToCart , setAddedToCart] = useState(false)
  const [addedToWishlist , setAddedToWishlist] = useState(false)
  const [image , setImage] = useState('')
  const handleClick = (e) => {
    setImage(e.target.src);
    console.log('clicked');
  };
  // console.log(inCart);
 
  const addToCart = async() => {
   await axios.post(`http://localhost:3000/cart/add?shoeId=${id}&userId=${getCookie('userId')}`)
   setAddedToCart(true)
   setTimeout(()=>{
    setAddedToCart(false)
   },800)
  };

  useEffect(() => {
    // console.log('shoedetails');
    axios.get(`http://localhost:3000/shoe/${id}`)
    .then(res =>{ 
      setShoes(res.data.shoe)
      setInCart(cart.some(shoe => shoe._id === id))
    }).catch((error)=> console.log(error))
    // console.log(cart.some(shoe => shoe._id === id));
  }, [ id , cart , shoe , inCart]);


if (loading) {
  return <Spinner />
}
if (error) {
  console.log(error)
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <h1 className="text-white text-[40px]">Something went wrong!!!</h1>
    </div>
  );
}
  return (<>
    {shoes ? 
 
    <div className="h-screen  w-screen bg-slate-900 p-10 flex relative ">
    {addedToCart ? <Notification text={"Item added to cart"}/> : ''}
    {addedToWishlist ? <Notification text={"Item added to wishlist"} wishlist={true}/> : ''}
      <div className="h-3/4 w-1/2 sticky top-10    border-purple-500 flex p-4 justify-evenly">
        <div className="h-full w-1/6 p-2 ">
          {shoes.image && shoes.image.length > 0 && (
            <>
              <img
                className="mt-2"
                src={`${shoes.image[0]}`}
                onClick={handleClick}
              />
              <img
                className="mt-2"
                src={`${shoes.image[1]}`}
                onClick={handleClick}
              />
              <img
                className="mt-2"
                src={`${shoes.image[2]}`}
                onClick={handleClick}
              />
            </>
          )}
        </div>
        <img src={image ? image : shoes.image[0]} className="h-[500px] w-[500px] bg-center object-contain" />
      </div>

      <div className="h-auto w-1/2 p-4 text-white    border-red-600">
        <h1 className="text-4xl">{shoes.productName}</h1>
        <br />
        <h2>{shoes.category}&apos;s Shoes</h2>
        <br />
        <h1>MRP: ${shoes.price}</h1>
        <br />
        <h2>Rating: <span className=" pl-2 pr-2 rounded-md bg-yellow-400 text-black">{shoes.rating}</span> </h2>
        <br />
        <div className="h-12 w-12 flex">
          <div className={`w-6 h-6 border-[1px] border-white mr-2 rounded-full`} 
          style={{backgroundColor: shoes.color.split('/')[0].toLowerCase()}}></div>

          <p className={`w-6 h-6 border-[1px] border-white rounded-full`} 
          style={{backgroundColor:shoes.color.split('/')[1] }}></p>
          
        </div>
        <br />
        <WishlistBtn text={true}  id={id}  />
        <br />
        {
          inCart ? 
         <CartIcon shoeDetail={true} />
           :
           <AddToCartBtn addToCart={addToCart} /> 
        
        
        }
        <br />
        <Review shoeId={id} />
      </div>
      
    </div>:
     <Spinner />
     }
    </>
  );
};

export default ShoesDetails;
