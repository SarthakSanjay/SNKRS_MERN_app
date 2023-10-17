import Logo from "./navItems/Logo";
import Search from "./Search";
import WishListIcon from "./wishlist/WishListIcon";
import CartIcon from "./cart/CartIcon";
import NavLinks from "./navItems/NavLinks";
import Dropdown from "./navItems/Dropdown";

const Nav = () => {
  return (
    <div className="flex justify-evenly bg-zinc-800 h-14 items-center w-screen sticky top-0 max-sm:justify-around p-2 ">
      <Logo className="w-1/3 " />
      <div className="max-sm:hidden">
      <NavLinks />
      </div>
      <div className="flex items-center w-1/3 justify-around">
      <div className="max-sm:hidden">
        <Search />
      </div>
        <WishListIcon />
        <CartIcon />
        <div className="">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Nav;
