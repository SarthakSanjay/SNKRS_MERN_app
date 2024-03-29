import { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes } from "../../store/shoeSlice";
import Spinner from "../Misc/Spinner";
import Filter from "../Filter/Filter"

const Shoes = () => {
  const [toggle , setToggel] = useState(false)
  const dispatch = useDispatch();
  const { shoes, loading, error } = useSelector((state) => state.shoe);
  const handleToggle = () =>{
    setToggel((prev) => !prev)
  }
  useEffect(() => {
    let url = `http://localhost:3000/shoe/all`
    dispatch(fetchShoes(url));
  }, [dispatch]);

  if (loading) {
    return <Spinner />
  }
  if (error) {
    console.log(error)
    return (
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <h1 className="text-white text-[40px]">Something went wrong!!!</h1>
      </div>
    );
  }

  return (
    <>
    <button className="absolute z-2 right-0 border border-white text-white rounded-lg py-2 px-6 w-fit m-2" onClick={handleToggle}>{toggle ? "Hide Filter" : "Show Filter" }</button>
    
    <div className="flex">
    {toggle ?
      <div className={` ${toggle ? 'w-1/5 transition-all duration-200 ease-in-out' : ''} `}>
    <Filter toggle={toggle} />

      </div>
      :''}
    <div className={`${toggle ? 'w-4/5 border' : 'w-screen  transition-all duration-0 delay-0 ease-in-out  '} p-10 flex flex-wrap justify-center `}>
      {/* <img
        src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1060&t=st=1696705876~exp=1696706476~hmac=d8bade4b3fdb88be9a895225cedd4f4c126b081199f549f510bb9668b4ff352c"
        className="h-[60vh] w-[90%]  "
      /> */}
      {shoes.length > 0 ? shoes.map((shoe) => {
        {/* console.log("mofo",shoe); */}
        return (
          <div key={shoe._id}>
            <ShoeCard shoe={shoe} 
            // id={shoe._id} wishlisted={shoe.wishlisted} color={shoe.color} 

            />
          </div>
        );
      }):<h1 className="text-white">No shoes matched</h1>}
    </div>
      </div>

     
    </>
  );
};

export default Shoes;
