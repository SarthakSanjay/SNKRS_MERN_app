import React from 'react'

const FilterColor = ({color,handleColorChange}) => {
  let colorArr = [
    'red','white','black','yellow','green','blue','violet','orange','grey'
  ]
  return (
    <div className=' w-2/3 flex justify-between '>
        <label htmlFor="color">Color : </label>
        <select value={color} onChange={handleColorChange} className='bg-purple-900/40 border text-white rounded-[2px] w-20 outline-none'>
          <option value="">All</option>
        {colorArr.map((col,index)=>{
          return <option key={index} value={col} >{col}</option>
          
        })}
          {/* <option value="black" >black</option>
          <option value="red" >red</option> */}
        </select>
      </div>
  )
}

export default FilterColor