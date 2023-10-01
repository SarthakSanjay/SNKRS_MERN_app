import Logo from "./navItems/Logo";
import { LiaShoppingBagSolid, LiaHeart } from "react-icons/lia";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WishListIcon from "./wishlist/WishListIcon";


const Nav = () => {
  const [badge, setBadge] = useState(0);
 const [count ,setCount] = useState(0)
  useEffect(() => {
    const handleClick = async() => {
     await fetch("http://localhost:3000/wishlist")
      .then((res) => res.json())
      .then((res) => setBadge(res.total))
    }
    handleClick()
  }, [count]);
  return (
    <div className="flex justify-evenly bg-white h-14 items-center w-screen sticky top-0">
        <Logo className="w-1/3 " />
      <ul className="flex text-blue-500 cursor-pointer w-1/3 justify-center">

        <Link to="/category/men"><li>Men</li></Link>
        <Link to="/category/women"><li className="ml-4 mr-4">Women</li></Link>
        <Link to="/category/unisex"><li>Unisex</li></Link>

      </ul>
      <div className="flex items-center w-1/3 justify-around">
        <Search />
        <WishListIcon badge={badge} />
        <LiaShoppingBagSolid className="text-2xl" />
      </div>
      <button onClick={() => setCount(count + 1)}>Refresh</button>
    </div>
  );
};

export default Nav;
