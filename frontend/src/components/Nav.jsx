import Logo from "./Logo"
import {LiaShoppingBagSolid ,LiaHeart} from "react-icons/lia"
import Search from "./Search"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex justify-evenly bg-white h-14 items-center w-screen sticky">
    <Link to="/">
        <Logo className="w-1/3 " />
    </Link>
        <ul className="flex text-blue-500 cursor-pointer w-1/3 justify-center">
        <Link to="/men">
            <li>Men</li>
        </Link>
        <Link to="/women">
            <li className="ml-4 mr-4">Women</li>
        </Link>
        <Link to="/unisex">
            <li>Unisex</li>
        </Link>
        </ul>
        <div className="flex items-center w-1/3 justify-around">
           <Search />
           <LiaHeart className="ml-4 text-2xl"/>
           <LiaShoppingBagSolid className="text-2xl"/>

        </div>
    </div>
  )
}

export default Nav