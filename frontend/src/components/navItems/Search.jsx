import { useState } from "react"
import {CiSearch} from "react-icons/ci"
import { useDispatch } from "react-redux"
import { fetchShoes } from "../../store/shoeSlice"
const Search = () => {
  const dispatch = useDispatch()
  const [search ,setSearch] = useState('')
  const handleChange = (e) =>{
    e.preventDefault()
    setSearch(e.target.value)
  }
  const handleSubmit = async() =>{
    if(search === ''){
      alert('cant be empty')
     return
     }
    let url = `http://localhost:3000/search?search=${search}`
    dispatch(fetchShoes(url))

  }
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      handleSubmit()
    }}>

    <div className='bg-gray-200 border-gray-500 flex h-10 rounded-[5px] justify-start items-center border-2 pl-2 pr-2 mr-14'>
        <CiSearch className='mr-3 text-2xl text-gray-500'/>
        <input 
        name="search"
        className='bg-gray-200 w-[300px] outline-none cursor-pointer' 
        placeholder='search'
        onChange={handleChange}
        />
         {/* <input 
         onClick={handleSubmit}
         type="button"
         value="search"
        /> */}

    </div>
        </form>
    </>
  )
}

export default Search