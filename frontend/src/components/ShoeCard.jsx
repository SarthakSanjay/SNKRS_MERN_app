import { Link } from "react-router-dom"

const ShoeCard = ({shoe,id}) => {
    const {productName,price, image} = shoe
    const handleClick = () =>{
        
    }
  return (
    <>
    <Link to={`/shoe/${id}`}>
    <div className=" h-max w-52 m-10 cursor-pointer text-white"
    onClick={handleClick}
    >
        <img src={image[1]} className="w-full object-cover h-40" />
        <h3 className="ml-2 p-1">{productName}</h3>
        <h3 className="ml-2 p-1">Price: ${price}</h3>

    </div>
    </Link>
    </>
  )
}

export default ShoeCard