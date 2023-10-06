import { LiaShoppingBagSolid } from "react-icons/lia"
import axios from 'axios'

const AddToCartBtn = ({addToCart}) => {
  const handleClick = () =>{
    alert('add to cart')
    addToCart()
  }
   return (
    <button onClick={handleClick} className='w-52 h-10 bg-white hover:bg-black hover:text-white rounded-full flex justify-center items-center text-black'>Add to Cart
    <LiaShoppingBagSolid className="text-2xl" />
    </button>
  )
}

export default AddToCartBtn