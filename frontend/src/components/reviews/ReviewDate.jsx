import React from 'react'

const ReviewDate = ({review}) => {
    let reviewDate = new Date(review.time).getDate()
    let currentDate =  new Date().getDate()
    let dateDiff = currentDate - reviewDate

  return (
    <span className='text-sm text-gray-600 '>{reviewDate === currentDate ? 'Today' : `${dateDiff} days ago`}</span>
  )
}

export default ReviewDate