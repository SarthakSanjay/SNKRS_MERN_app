import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../utils/cookie'

const Review = ({shoeId}) => {
    const [reviews , setReviews] = useState([])
    const [reviewBox , setReviewBox] = useState(false)
    const [reviewText , setReviewText] = useState('')
    const [rating , setRating] = useState(0)
    const handleClick = () =>{
        setReviewBox(prev => !prev)
    }
    const handleRating = (e) =>{
        e.preventDefault()
        setRating(e.target.value)

    }
    const handelChange = (e) =>{
        e.preventDefault()
        const { value } = e.target;
        console.log(value);
        setReviewText(value);
    }
    const handleSubmit = async() =>{
        console.log(reviewText);
       await axios.post(`http://localhost:3000/reviews/new?shoeId=${shoeId}&userId=${getCookie('userId')}`,
        {
            userReview: reviewText,
            rating: rating
        }).then(()=> console.log('review posted'))
        .catch((error) => console.log(error.message))
    
    }
    console.log(reviews);
    useEffect(()=>{
        console.log('object');
        async function fetchReviews(){

            let res = await axios.get(`http://localhost:3000/reviews?shoeId=${shoeId}`)
            console.log(res.data.reviews);
            setReviews(res.data.reviews)
        }
        fetchReviews()


    },[])
  return (
    <div className='w-full relative'>
    <h1 className='text-3xl'>Reviews and Rating</h1>
    <button onClick={handleClick} className='absolute right-0 text-white bg-blue-500 px-2 hover:bg-white hover:text-blue-500 rounded-md'>{reviewBox ? 'Cancel' :'+ Add review'}</button>
    {reviewBox ? <form className='bg-gray-700  p-2 rounded-md'>
        <label htmlFor='addReview'>Add review</label>
        <input id='addReview' type='text' className='text-black pl-4 border-none px-2 rounded-sm mx-5' onChange={handelChange} />
        <label htmlFor='rating'>Rating</label>
        <select id='rating' onChange={handleRating} className='bg-black mx-2'>
            {Array.from({ length: 5 }, (_, index) => (
                
                <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </select>

        <button onClick={handleSubmit} className=' text-white bg-blue-500 px-2 hover:bg-white hover:text-blue-500 rounded-md'>Post</button>
    </form> : ''}
    <br />
    <br />
        {reviews.map((review)=>{
            return <div key={review._id} className='w-full border border-t-0 border-x-0 h-14 px-2 py-1'>
            {review.rating <= 0 ? null :  <span className='px-2 mr-2 bg-green-600 rounded-full'>{review.rating } ★ </span> }

                <span>{review.review}</span>
                <div>
                <span className='text-sm text-gray-300'>{review.user && review.user.email.split('@')[0] }</span>
                {/* <span className='border '>{review.createdAt}</span> */}
                </div>
            </div>
        })}
    </div>
  )
}

export default Review