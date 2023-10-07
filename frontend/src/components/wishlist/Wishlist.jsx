import React, { useEffect, useState } from 'react'
import ShoeCard from '../ShoeCard';
// import shoe from '../../../../backend/models/shoe'

const Wishlist = () => {
    const [wishlist , setWishlist] = useState([])
    const deleteAll =async () => {
      await fetch('http://localhost:3000/wishlist/deleteAll',{method: "DELETE"})
      .then(console.log("deletedALl"))
      .catch(e => console.log(e.message))
      
    }

    useEffect(() => {
        fetch('http://localhost:3000/wishlist')
          .then((res) => res.json())
          .then((res) => {
            const shoeIds = res.shoe.map((shoe) => shoe.shoeId);
      
            // Fetch shoe details for each shoeId
            const fetchShoeDetails = async () => {
              const details = await Promise.all(
                shoeIds.map((shoeId) =>
                  fetch(`http://localhost:3000/shoe/${shoeId}`)
                  .then((res) => res.json())
                  .then((res) => res.shoe)
                  
                )
              );
              setWishlist(details);
              console.log(details)
            };
      
            fetchShoeDetails();
          })
          .catch((error) => console.error('Error fetching wishlist:', error));
      }, []);
      if(wishlist.length === 0){
        return <div className='bg-black h-screen w-screen flex justify-center items-center'>
          <h1 className='text-white text-[40px]'>Loading ...</h1>
        </div>
      }

  return (
    <>

    <button onClick={deleteAll}>DeleteALL</button>
    <div className=' min-h-screen w-screen p-10 flex flex-wrap'>
      {wishlist.map((shoe , index) => {
        return <div key={index}>
            <ShoeCard shoe={shoe} />
        </div>
      })}
    </div>
    </>
  )
}

export default Wishlist