import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WishlistBtn from './wishlist/WishlistBtn'
const ShoesDetails = () => {
    const { id} = useParams()
    const [product , setProduct] = useState({})
    const [btnActive , setBtnActive] = useState(true)
    // const [image , setImage] = useState(product.image[0])
    const [image, setImage] = useState(product.image && product.image.length > 0 ? product.image[0] : '');

    const [wishlist , setWishlist] = useState({})

    // console.log(image)
    const handleClick = (e) =>{
        setImage(e.target.src)
        console.log(e.target.src)
    }
   
    const handleWishlist = () => {
      // Data to be sent in the POST request
      if(!btnActive){
        setBtnActive(false)
      }else{
        setBtnActive(true)
        
      }
      const data = {
        _id: id  // Assuming id is defined and contains the appropriate value
      };
    
      fetch('http://localhost:3000/wishlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Wishlist item added:', data);
        })
        .catch((error) => {
          console.error('Error adding to wishlist:', error);
        });
    };
    

    useEffect(() => {
        fetch(`http://localhost:3000/shoe/${id}`)
        .then((res) => res.json())
        .then((response) => {setProduct(response.shoe)
        // console.log(response.shoe)
    })
        .catch(e => console.log(e.message))
    } , [id])

    // const renderStars = () => {
    //     const stars = [];
    //     const fullStars = Math.floor(product.rating); // Get the integer part of the rating
    //     const hasHalfStar = product.rating - fullStars >= 0.5; // Check if there's a half star
      
    //     // Render full stars
    //     for (let i = 0; i < fullStars; i++) {
    //       stars.push(<span key={i}>⭐</span>);
    //     }
      
    //     // Render half star if needed
    //     if (hasHalfStar) {
    //       stars.push(<span key='half' className='border-2 border-red-600 '>⭐<span className='bg-blue-200 w-6 border-2 absolute h-6 left'></span></span>);
    //     }
      
    //     return stars;
    //   };
      

  return (
    <div className='h-screen w-screen bg-blue-200 p-10 flex '>
       <div className='h-3/4 w-1/2 flex p-4 justify-evenly'>
  <div className='h-full w-1/6 p-2 '>
    {product.image && product.image.length > 0 && (
      <>
        <img className='mt-2' src={`${product.image[0]}`} onClick={handleClick} />
        <img className='mt-2' src={`${product.image[1]}`} onClick={handleClick} />
        <img className='mt-2' src={`${product.image[2]}`} onClick={handleClick} />
      </>
    )}
  </div>
  <img src={image} />
</div>

        <div className='border-2 w-1/2 p-4 '>
            <h1 className='text-4xl'>{product.productName}</h1>
            <h2>{product.category}&apos;s Shoes</h2>
            <h1>MRP: ${product.price}</h1>
            <h2>Rating: {product.rating} </h2>
            {/* <span className='w-max border-2'>{renderStars()}</span> */}
            <WishlistBtn handleWishlist={handleWishlist} btnActive={btnActive}/>

        </div>
    
    </div>
  )
}

export default ShoesDetails