
const ShoeCard = ({shoe}) => {
    const {productName,price, image} = shoe
    const handleClick = () =>{
        
    }
  return (
    <div className=" h-max w-52 m-10 cursor-pointer"
    onClick={handleClick}
    >
        <img src={image[1]} className="w-full object-cover h-40" />
        <h3 className="ml-2 p-1">{productName}</h3>
        <h3 className="ml-2 p-1">Price: ${price}</h3>

    </div>
  )
}

export default ShoeCard