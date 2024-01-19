import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../utils/cookie'
import ReviewDate from './ReviewDate'
import RatingBadge from './RatingBadge'

const Review = ({shoeId}) => {
    const [reviews , setReviews] = useState([])
    const [reviewBox , setReviewBox] = useState(false)
    const [reviewText , setReviewText] = useState('')
    const [rating , setRating] = useState(0)
    const [overallRating , setOverAllRating] = useState(0)
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
    // console.log(reviews);
    useEffect(()=>{
        async function fetchReviews(){

            let res = await axios.get(`http://localhost:3000/reviews?shoeId=${shoeId}`)
            setReviews(res.data.reviews)
            setOverAllRating(res.data.totalRating)

        }
        fetchReviews()


    },[overallRating])
  return (
    <div className='w-full relative'>
    <h1 className='text-3xl'>Reviews and Rating  <RatingBadge fromOverAllRating={true} overallRating={overallRating} /></h1>
   
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
            return <div key={review._id} className='w-full border border-t-0 border-x-0 h-max px-2 py-1'>
            <RatingBadge review={review} />
            

                <span>{review.review}</span>
                <div className='flex justify-between'>
                <span className='text-sm text-gray-300'>{review.user && review.user.email.split('@')[0] }</span>
                <ReviewDate review={review} />
                </div>
            </div>
        })}
    </div>
  )
}

export default Review