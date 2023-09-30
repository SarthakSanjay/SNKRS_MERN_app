import Logo from "./Logo";
import { LiaShoppingBagSolid, LiaHeart } from "react-icons/lia";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Nav = () => {
  const [badge, setBadge] = useState(0);
  
  useEffect(() => {
    fetch("http://localhost:3000/wishlist")
      .then((res) => res.json())
      .then((res) => setBadge(res.total))
  }, []);
  return (
    <div className="flex justify-evenly bg-white h-14 items-center w-screen sticky top-0">
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
        <Link to="/wishlist">
          <div className=" h-10 w-20 flex justify-center items-center  relative">
            <LiaHeart className=" text-3xl " />
          <div className="w-5 h-5 bg-pink-400 text-white flex justify-center items-center rounded-full absolute top-0 right-0">
              {badge}
            </div> 
           
          </div>
        </Link>
        <LiaShoppingBagSolid className="text-2xl" />
      </div>
    </div>
  );
};

export default Nav;
