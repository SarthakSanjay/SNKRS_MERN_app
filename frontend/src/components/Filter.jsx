import React from 'react'

const Filter = () => {
  return (
    <div className='bg-black h-[90vh] w-1/4 flex justify-center items-center fixed text-white '>
        <ul>
            <li>Brand</li>
            <li>Rating</li>
            <li>Price:Low to high</li>
            <li>Price:High to low</li>
        </ul>
    </div>
  )
}

export default Filter