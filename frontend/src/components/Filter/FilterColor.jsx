import React from 'react'

const FilterColor = ({color,handleColorChange}) => {
  return (
    <div className=' w-2/3 flex justify-between '>
        <label htmlFor="color">Color : </label>
        <select value={color} onChange={handleColorChange} className='bg-purple-900/40 border text-white rounded-[2px] w-20 outline-none'>
          <option value="">All</option>
          <option value="white" >white</option>
          <option value="black" >black</option>
          <option value="red" >red</option>
        </select>
      </div>
  )
}

export default FilterColor