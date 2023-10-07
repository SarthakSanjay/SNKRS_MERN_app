import { useEffect, useState } from "react";
import { LiaShoppingBagSolid} from "react-icons/lia";
import { Link } from "react-router-dom";
import axios from 'axios'
const CartIcon = () => {
  const [totalCartItems , setTotalCartItems] = useState(0)
  useEffect(() =>{
    axios.get('http://localhost:3000/cart')
    .then(res => {setTotalCartItems(res.data.total)})
    .catch(e => console.log(e.message))
  })
  return (
    <Link to='/cart'>
        <LiaShoppingBagSolid className="text-3xl text-white" />
        <h1 className="text-white absolute top-2 right-44 rounded-full bg-green-500 w-5 h-5 flex justify-center items-center " >{totalCartItems}</h1>
        
    </Link>
  )
}

export default CartIcon