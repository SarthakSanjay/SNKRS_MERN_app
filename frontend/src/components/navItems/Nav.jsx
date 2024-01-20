import Logo from "./Logo";
import Search from "./Search";
import WishListIcon from "../wishlist/WishListIcon";
import CartIcon from "../cart/CartIcon";
import NavLinks from "./NavLinks";
import Dropdown from "./Dropdown";
import Profile from "./Profile";
import { removeAllCookies } from "../../utils/cookie";

const Nav = () => {
  return (
    <div className="hidden sm:flex justify-evenly bg-zinc-800 h-16 items-center w-screen sticky top-0 max-sm:justify-around p-2 z-10 ">
      <Logo className="w-1/4 " />
      <div className="max-sm:hidden">
      <NavLinks />
      </div>
      <div className="flex items-center w-1/2 justify-around">
      <div className="max-sm:hidden">
        <Search />
      </div>
        <WishListIcon />
        <CartIcon />
        <Profile />
        <button className="w-40 h-10 ml-4 text-white  " onClick={removeAllCookies}>Logout</button>
      </div>
    </div>
  );
};

export default Nav;
