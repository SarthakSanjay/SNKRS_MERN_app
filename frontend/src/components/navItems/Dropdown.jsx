import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import Search from "../Search";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleDropdown}
        className=" h-14 w-14  justify-center items-center max-sm:flex lg:hidden"
      >
        <RxHamburgerMenu className="text-3xl text-white" />
      </button>
      {isOpen && (
        <ul className=" flex flex-col items-center justify-center absolute top-14 left-0 w-full bg-black h-[150px] ">
        <Search />
          <Link to="/category/men">
            <li className="w-full h-[15px] text-green-500 text-2xl mt-3">
              Men
            </li>
          </Link>
          <Link to="/category/women">
            <li className="w-full h-[15px] text-green-500 text-2xl mt-3">
              Women
            </li>
          </Link>
          <Link to="/category/unisex">
            <li className="w-full h-[15px] text-green-500 text-2xl mt-3">
              Unisex
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
