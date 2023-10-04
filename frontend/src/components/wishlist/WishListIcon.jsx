import { Link } from "react-router-dom";
import { LiaHeart } from "react-icons/lia";
import { useEffect, useState } from "react";

const WishListIcon = () => {
  const [badge, setBadge] = useState(0);
  // const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      
         await fetch("http://localhost:3000/wishlist")
         .then((res) => res.json())
         .then((data)=>{

          //  setApiData(data);
           setBadge(data.total);
         })
        
      
    };

    fetchData();
  }, []);

 

  return (
    <Link to="/wishlist">
      <div className=" h-10 w-20 flex justify-center items-center  relative text-white">
        <LiaHeart className=" text-3xl " />
        <div className="w-5 h-5 bg-pink-400 text-white flex justify-center items-center rounded-full absolute top-0 right-0">
          {badge}
        </div>
      </div>
    </Link>
  );
};

export default WishListIcon;
