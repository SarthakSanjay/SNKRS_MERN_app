import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { fetchShoes } from "../store/shoeSlice"

const Filter = () => {
  const [color, setColor] = useState('');
  const [company, setCompany] = useState('');
  // const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState(4.5)
  
  const handleColorChange = (e) => {  
    setColor(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handlePriceChange = (e) =>{
    setPrice(e.target.value)
  }
  const handleRatingChnage = (e) =>{
    setRating(e.target.value)
  }
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   let url = `http://localhost:3000/search?search=${searchQuery}`
  //   if(searchQuery){
  //     dispatch(fetchShoes(url))

  //   }
  // },[dispatch,searchQuery])
  let companyArray = [
    "All",
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Converse",
    "Under Armour",
    "Vans",
    "Skechers",
    "ASICS"
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the URL based on selected values
    const baseUrl = `http://localhost:3000/filter`;
    const queryParams = [];
    
    if (color) {
      queryParams.push(`color=${color}`);
    }
    
    if (company) {
      queryParams.push(`companyName=${company}`);
    }

    // if(category){
    //   queryParams.push(`category=${category}`)
    // }
    if(rating){
      queryParams.push(`rating=${rating}`)
    }

    if(price === '0-50'){
      queryParams.push(`maxPrice=50`)
    }else if(price === '50-100'){
      queryParams.push('minPrice=50&maxPrice=100')
    }else if(price === '100-200'){
      queryParams.push('minPrice=100&maxPrice=200')
    }
    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = `${baseUrl}${queryString}`;
    dispatch(fetchShoes(finalUrl))
    
    console.log(finalUrl);
  };
  return (
<form onSubmit={handleSubmit} >
<div className='bg-black h-[93vh] pl-10 w-1/4 flex flex-col justify-center items-start fixed text-white text-2xl text-left'>
      <div>
        <label htmlFor="color">Color : </label>
        <select value={color} onChange={handleColorChange} className='bg-purple-900 text-white rounded-[2px] w-20 outline-none'>
          <option value="">All</option>
          <option value="white" >white</option>
          <option value="black" >black</option>
          <option value="red" >red</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="company">Company : </label>
        <select value={company} onChange={handleCompanyChange} className='bg-purple-900 text-white rounded-[2px] w-20 outline-none'>
          <option value="">All</option>
          {companyArray.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </select>
      </div>
      <br />
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
      <br />
      <div>
        <h3>Rating:</h3>
        <div>
          <input type='radio' name='rating' id='4' value='4' onChange={handleRatingChnage} />
          <label>⭐️⭐️⭐️⭐️ & above</label>
        </div>
        <div>
          <input type='radio' name='rating' id='3' value='3' onChange={handleRatingChnage} />
          <label>⭐️⭐️⭐️ $ above</label>
        </div>
        <div>
          <input type='radio' name='rating' id='2' value='2' onChange={handleRatingChnage} />
          <label>⭐️⭐️ $ above</label>
        </div>

      </div>
      <br />
      <button type="submit" className='bg-blue-400 text-white p-2 rounded-xl hover:bg-blue-600 '>Apply Filters</button>
      </div>
    </form>
  )
}

export default Filter

