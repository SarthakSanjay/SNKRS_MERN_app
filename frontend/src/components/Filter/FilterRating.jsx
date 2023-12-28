import React from 'react'

const FilterRating = ({handleRatingChange}) => {
  return (
    <div>
    <h3>Rating:</h3>
    <div>
      <input type='radio' name='rating' id='4' value='4' onChange={handleRatingChange} />
      <label>⭐️⭐️⭐️⭐️ & above</label>
    </div>
    <div>
      <input type='radio' name='rating' id='3' value='3' onChange={handleRatingChange} />
      <label>⭐️⭐️⭐️ $ above</label>
    </div>
    <div>
      <input type='radio' name='rating' id='2' value='2' onChange={handleRatingChange} />
      <label>⭐️⭐️ $ above</label>
    </div>

  </div>
  )
}

export default FilterRating