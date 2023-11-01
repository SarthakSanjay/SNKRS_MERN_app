import React, { useState } from "react";
import Link from "react-redux";
const Profile = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <div
        className=" border-[1px] border-red-500  text-white cursor-pointer "
        onClick={handleClick}
      >
        Profile
      </div>

      {display ? (
        <div className="h-[90vh] w-[300px] bg-pink-900 absolute z-100 top-[55px] right-0  ">
          side menu
          <button className="bg-black rounded-[2px] text-white">
            <Link to='/login'>Login</Link>
          </button>
          <button className="bg-black rounded-[2px] text-white">
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
