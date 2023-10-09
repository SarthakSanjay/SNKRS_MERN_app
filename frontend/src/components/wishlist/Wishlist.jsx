import React, { useEffect } from 'react';
import ShoeCard from '../ShoeCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist } from '../../store/wishlistSlice';
import axios from 'axios';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { loading , shoe , error } = useSelector((state) => state.wishlist);
  // console.log('shoe', shoe)
  const deleteAll = () => {
    axios.delete('http://localhost:3000/wishlist/deleteAll')
    .then(console.log("deletedALl"))
    .then(dispatch(fetchWishlist()))
    .catch(e => console.log(e.message))
    
  }
  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  if (loading) {
    return <div className='bg-black h-screen w-screen flex justify-center items-center'>
      <h1 className='text-white text-[40px]'>Loading ...</h1>
    </div>;
  }
  if (error) {
    return <div className='bg-black h-screen w-screen flex justify-center items-center'>
      <h1 className='text-white text-[40px]'>Something went wrong!!!</h1>
    </div>;
  }
 
  return (
    <>
      <div className='min-h-screen w-screen p-10 flex flex-wrap'>
      <button onClick={deleteAll} className="bg-pink-700 text-white rounded-[4px] p-2 fixed right-10 ">Clear wishlist</button>
        {shoe && shoe.map((wishlistItem) => {
          {/* console.log(wishlistItem.shoeId.productName) */}
          return <ShoeCard key={wishlistItem._id} shoe={wishlistItem.shoeId} id={wishlistItem._id} /> 
        })
        }
        
      </div>
    </>
  );
};

export default Wishlist;
