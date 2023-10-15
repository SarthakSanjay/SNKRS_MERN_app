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
        <LiaShoppingBagSolid className="text-3xl text-white" />
        <h1 className="text-white absolute top-2 right-24 rounded-full bg-green-500 w-5 h-5 flex justify-center items-center " >{totalItems}</h1>
        
    </Link>
  )
}

export default CartIcon