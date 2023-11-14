import { useState } from "react"
import {CiSearch} from "react-icons/ci"
import axios from 'axios'
const Search = () => {
  const [search ,setSearch] = useState('')
  const handleChange = (e) =>{
    e.preventDefault()
    setSearch(e.target.value)
  }
  const handleSubmit = async() =>{
    axios.get()

  }
  return (
    <>
    <div className='bg-gray-200 border-gray-500 flex h-10 rounded-[5px] justify-start items-center border-2 pl-2 pr-2 '>
        <CiSearch className='mr-3 text-2xl text-gray-500'/>
        <input 
        name="search"
         className='bg-gray-200 w-36 outline-none cursor-pointer' 
         placeholder='search'
         onChange={handleChange}
         onSubmit={handleSubmit}
          />

    </div>
    </>
  )
}

export default Search