import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { fetchShoes } from "../store/shoeSlice"

const Filter = () => {
  const [color, setColor] = useState('');
  const [company, setCompany] = useState('');
  
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
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

    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = `${baseUrl}${queryString}`;
    dispatch(fetchShoes(finalUrl))
    // Now 'finalUrl' contains the constructed URL based on the form selections
    console.log(finalUrl);
  };
  return (
<form onSubmit={handleSubmit}>
<div className='bg-black h-[93vh] w-1/4 flex flex-col justify-center items-center fixed text-white '>
      <div>
        <label htmlFor="color">Color : </label>
        <select value={color} onChange={handleColorChange} className='bg-black text-white border-2 w-20 outline-none'>
          <option value="">All</option>
          <option value="white">white</option>
          <option value="black">black</option>
          <option value="red">red</option>
        </select>
      </div>
      <div>
        <label htmlFor="company">Company : </label>
        <select value={company} onChange={handleCompanyChange} className='bg-black text-white border-2 w-20 outline-none'>
          <option value="">All</option>
          {/* Replace companyArray with your array of company names */}
          {companyArray.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </select>
      </div>
      <button type="submit">Apply Filters</button>
      </div>
    </form>
  )
}

export default Filter