import Logo from "./navItems/Logo";
import Search from "./Search";
import { Link } from "react-router-dom";
import {  useState } from "react";
import WishListIcon from "./wishlist/WishListIcon";
import CartIcon from "./cart/CartIcon";
import NavLinks from "./navItems/NavLinks";


const Nav = () => {
 
 const [count ,setCount] = useState(0)
  
  return (
    <div className="flex justify-evenly bg-zinc-800 h-14 items-center w-screen sticky top-0">
        <Logo className="w-1/3 " />
        <NavLinks />
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
