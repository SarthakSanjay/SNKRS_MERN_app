import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const Profile = () => {
  const [display, setDisplay] = useState(false);
  const [userName , setUserName] = useState("")
  // console.log(Cookies.get())
  useEffect(()=>{
    setUserName(Cookies.get('username'))

  })
  const handleClick = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <div
        className="   text-white cursor-pointer   "
        onClick={handleClick}
      >
        Profile
      </div>

      {display ? (
        <div className="h-[93vh] w-[300px] p-10 bg-indigo-300 flex justify-start items-center flex-col gap-10 absolute z-50 top-16 right-0  ">
        <h1 className="mt-20 text-black">{userName}</h1>
        <h1>{Cookies.get("userId")}</h1>
          <button className="w-52 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white">
            <Link to='/login'>Login</Link>
          </button>
          <button className="w-52 h-10 bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center text-white">
            <Link to='/register'>Register</Link>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
