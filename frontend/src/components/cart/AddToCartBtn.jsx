import { LiaShoppingBagSolid } from "react-icons/lia"

const AddToCartBtn = () => {
  return (
    <button className='w-52 h-10 bg-white hover:bg-black hover:text-white rounded-full flex justify-center items-center text-black'>Add to Cart
    <LiaShoppingBagSolid className="text-2xl" />
    </button>
  )
}

export default AddToCartBtn