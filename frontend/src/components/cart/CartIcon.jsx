import { LiaShoppingBagSolid} from "react-icons/lia";
import { Link } from "react-router-dom";
const CartIcon = () => {
  return (
    <Link to='/cart'>
        <LiaShoppingBagSolid className="text-3xl text-white" />
    </Link>
  )
}

export default CartIcon