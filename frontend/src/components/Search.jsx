import {CiSearch} from "react-icons/ci"
const Search = () => {
  return (
    <>
    <div className='bg-gray-200 border-gray-500 flex h-10 rounded-full justify-start items-center border-2 pl-2 pr-2'>
        <CiSearch className='ml-3 text-2xl'/>
        <input className='bg-gray-200 w-36 outline-none cursor-pointer' placeholder='search' />

    </div>
    </>
  )
}

export default Search