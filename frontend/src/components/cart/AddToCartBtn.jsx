import { LiaShoppingBagSolid } from "react-icons/lia"
import { fetchCart } from "../../store/cartSlice"
import { useDispatch } from "react-redux"
const AddToCartBtn = ({addToCart}) => {
  const dispatch = useDispatch()
  const handleClick = () =>{
    addToCart()
    alert('add to cart')
    dispatch(fetchCart())
  }
   return (
    <button onClick={handleClick} className='w-52 h-10 bg-white hover:bg-black hover:text-white rounded-full flex justify-center items-center text-black'>Add to Cart
    <LiaShoppingBagSolid className="text-2xl" />
    </button>
  )
}

export default AddToCartBtn