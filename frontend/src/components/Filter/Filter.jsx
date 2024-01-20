import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchShoes } from "../../store/shoeSlice";
import FilterColor from "./FilterColor";
import FilterCompany from "./FilterCompany";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const Filter = ({toggle}) => {
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  // const [category, setCategory] = useState('')
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(4.5);
  const [filterItems, setFilterItems] = useState([]);
 
  const handleColorChange = (e) => {
    setColor(e.target.value);
    setFilterItems((prevItems) => [...prevItems, e.target.value]);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    setFilterItems((prevItems) => [...prevItems, e.target.value]);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setFilterItems((prevItems) => [...prevItems, `$${e.target.value}`]);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setFilterItems((prevItems) => [...prevItems, `${e.target.value}⭐️`]);
  };
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   let url = `http://localhost:3000/search?search=${searchQuery}`
  //   if(searchQuery){
  //     dispatch(fetchShoes(url))

  //   }
  // },[dispatch,searchQuery])

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
    if (rating) {
      queryParams.push(`rating=${rating}`);
    }

    if (price === "0-50") {
      queryParams.push(`maxPrice=50`);
    } else if (price === "50-100") {
      queryParams.push("minPrice=50&maxPrice=100");
    } else if (price === "100-200") {
      queryParams.push("minPrice=100&maxPrice=200");
    }
    const queryString =
      queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
    const finalUrl = `${baseUrl}${queryString}`;
    dispatch(fetchShoes(finalUrl));

    console.log(finalUrl);
    console.log(filterItems);
  };
  return (
    <form onSubmit={handleSubmit}> 
      <div className={`bg-black w-1/5 h-[93vh] pl-10 flex flex-col justify-center items-start fixed text-white text-2xl text-left transition-all delay-500 duration-100 ease-in-out`}>
        <div className="w-full  h-1/6 mb-20 flex flex-wrap text-sm">
          {[...new Set(filterItems)].map((items, index) => {
            return (
              <span
                className="bg-sky-500/50 h-1/4 flex justify-center items-center  m-2 p-1 text-white border-[1px] rounded-sm"
                key={index}
              >
                {items}
              </span>
            );
          })}
        </div>
        <FilterColor handleColorChange={handleColorChange} color={color} />
        <br />
        <FilterCompany
          handleCompanyChange={handleCompanyChange}
          company={company}
        />

        <br />
        <FilterPrice handlePriceChange={handlePriceChange} />
        <br />
        <FilterRating handleRatingChange={handleRatingChange} />
        <br />
        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded-xl hover:bg-blue-600 "
        >
          Apply Filters
        </button>
      </div> 
    </form>
  );
};

export default Filter;
