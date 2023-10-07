import React from 'react'
import { Link } from 'react-router-dom'
const NavLinks = () => {
  return (
    <ul className="flex text-green-500 cursor-pointer w-1/3 justify-center tracking-wider ">

    <Link to="/category/men"><li className="hover:bg-black p-2 rounded-[3px] hover:border-[1px] border-green-500">Men</li></Link>
    <Link to="/category/women"><li className="hover:bg-black p-2 rounded-[3px] hover:border-[1px] border-green-500 mx-2 ">Women</li></Link>
    <Link to="/category/unisex"><li className="hover:bg-black p-2 rounded-[3px] hover:border-[1px] border-green-500">Unisex</li></Link>

  </ul>
  )
}

export default NavLinks