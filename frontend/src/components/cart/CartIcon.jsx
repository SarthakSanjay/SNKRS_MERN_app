import { useEffect } from "react";
import { LiaShoppingBagSolid} from "react-icons/lia";
import { Link } from "react-router-dom";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch , useSelector } from "react-redux";
const CartIcon = ({shoeDetail}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state.cart)
  useEffect(() =>{
    dispatch(fetchCart())
  },[dispatch , cart])
  return (
    <Link to='/cart'>
  {shoeDetail ? 
    
    <button className='w-52 h-10 bg-orange-600 hover:bg-black hover:text-orange-600 rounded-full flex justify-center items-center text-black'>Go to Cart
    <LiaShoppingBagSolid className="text-2xl " />
    </button>
     : 
  
    <button className=" h-14 w-14 flex justify-center items-center ">
        <LiaShoppingBagSolid className="text-3xl text-white absolute " />
        {cart.length > 0 ? 
          <h1 className="text-white relative bottom-3 left-3  rounded-full bg-green-500 w-5 h-5 flex justify-center items-center " >{cart.length}</h1>
        : ''}
        
    </button>}
    </Link>
  )
}

export default CartIcon