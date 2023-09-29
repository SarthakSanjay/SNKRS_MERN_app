import React, { useEffect, useState } from 'react'
import ShoeCard from '../ShoeCard';
// import shoe from '../../../../backend/models/shoe'

const Wishlist = () => {
    const [wishlist , setWishlist] = useState([])
    

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
      

  return (
    <div className='h-[100%] w-screen bg-gray-200 p-10 flex flex-wrap'>
      {wishlist.map((shoe , index) => {
        return <div key={index}>
            <ShoeCard shoe={shoe} />
        </div>
      })}
    </div>
  )
}

export default Wishlist