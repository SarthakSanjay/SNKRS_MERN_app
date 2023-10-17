import { useEffect } from "react";
import { LiaShoppingBagSolid} from "react-icons/lia";
import { Link } from "react-router-dom";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch , useSelector } from "react-redux";
const CartIcon = () => {
  const dispatch = useDispatch()
  const {totalItems} = useSelector(state => state.cart)
  useEffect(() =>{
    dispatch(fetchCart())
  },[dispatch])
  return (
    <Link to='/cart'>
    <div className=" border-red-700 border-[2px] h-14 w-14 flex justify-center items-center ">
        <LiaShoppingBagSolid className="text-3xl text-white absolute " />
        <h1 className="text-white relative bottom-3 left-3  rounded-full bg-green-500 w-5 h-5 flex justify-center items-center " >{totalItems}</h1>
    </div>
    </Link>
  )
}

export default CartIcon