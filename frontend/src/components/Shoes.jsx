import { useEffect } from "react";
import ShoeCard from "./ShoeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes } from "../store/shoeSlice";
import Spinner from "./Spinner";
import Filter from "./Filter"
const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes, loading, error } = useSelector((state) => state.shoe);
  const {deleteBtnClicked} = useSelector(store => store.wishlist)
  // console.log(shoes)
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
    <div className="flex">
      <div className="w-1/4">
    <Filter />

      </div>
    <div className="w-3/4 p-10 flex flex-wrap justify-center ">
      {/* <img
        src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1060&t=st=1696705876~exp=1696706476~hmac=d8bade4b3fdb88be9a895225cedd4f4c126b081199f549f510bb9668b4ff352c"
        className="h-[60vh] w-[90%]  "
      /> */}
      {shoes.map((shoe) => {
        {/* console.log("mofo",shoe); */}
        return (
          <div key={shoe._id}>
            <ShoeCard shoe={shoe} id={shoe._id} wishlisted={shoe.wishlisted} />
          </div>
        );
      })}
    </div>
      </div>
  );
};

export default Shoes;
