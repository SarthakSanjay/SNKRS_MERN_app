import Logo from "./navItems/Logo";
import Search from "./Search";
import { Link } from "react-router-dom";
import {  useState } from "react";
import WishListIcon from "./wishlist/WishListIcon";
import CartIcon from "./cart/CartIcon";


const Nav = () => {
 
 const [count ,setCount] = useState(0)
  
  return (
    <div className="flex justify-evenly bg-zinc-800 h-14 items-center w-screen sticky top-0">
        <Logo className="w-1/3 " />
      <ul className="flex text-orange-600 cursor-pointer w-1/3 justify-center">

        <Link to="/category/men"><li>Men</li></Link>
        <Link to="/category/women"><li className="ml-4 mr-4">Women</li></Link>
        <Link to="/category/unisex"><li>Unisex</li></Link>

      </ul>
      <div className="flex items-center w-1/3 justify-around">
        <Search />
        <WishListIcon  />
        <CartIcon />
        
      </div>
      <button onClick={() => setCount(count + 1)}>Refresh</button>
    </div>
  );
};

export default Nav;
