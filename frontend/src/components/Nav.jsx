import Logo from "./navItems/Logo";
import Search from "./Search";
import WishListIcon from "./wishlist/WishListIcon";
import CartIcon from "./cart/CartIcon";
import NavLinks from "./navItems/NavLinks";

const Nav = () => {
  return (
    <div className="flex justify-evenly bg-zinc-800 h-14 items-center w-screen sticky top-0">
      <Logo className="w-1/3 " />
      <NavLinks />
      <div className="flex items-center w-1/3 justify-around">
        <Search />
        <WishListIcon />
        <CartIcon />
      </div>
    </div>
  );
};

export default Nav;
