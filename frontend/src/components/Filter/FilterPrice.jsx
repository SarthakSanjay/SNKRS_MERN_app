import React from 'react'

const FilterPrice = ({handlePriceChange}) => {
  return (
    <div className='flex flex-col'>
    <h3>Price: </h3>
    <div>
    <input type="radio" name='price' id="price1" value="0-50" onChange={handlePriceChange} />
    <label htmlFor='price1'>$0-50</label>

    </div>
    <div>
    <input type="radio" name='price' id="price2" value="50-100" onChange={handlePriceChange} />
    <label htmlFor='price2'>$50-100</label>

    </div>
    <div>
    <input type="radio" name='price' id="price3" value="100-200" onChange={handlePriceChange} />
    <label htmlFor='price3'>$100-200</label>

    </div>
    
  </div>
  )
}

export default FilterPrice