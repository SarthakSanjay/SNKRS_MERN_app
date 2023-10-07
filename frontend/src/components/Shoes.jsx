import { useEffect, useState } from "react"
import ShoeCard from "./ShoeCard"
// import { Link } from "react-router-dom"

const Shoes = () => {
    const [product , setProduct] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/shoe/all")
        .then((response) => response.json())
        .then((response) => setProduct(response.shoes))
        .catch(e => console.log(e.message))
    },[])
  return (
    <div className="w-screen p-10 flex flex-wrap justify-center">
    <img src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1060&t=st=1696705876~exp=1696706476~hmac=d8bade4b3fdb88be9a895225cedd4f4c126b081199f549f510bb9668b4ff352c" className="h-[60vh] w-[90%]  " />
    {
        product.map((shoe) => (
            <div key={shoe._id}>
                <ShoeCard shoe={shoe} id={shoe._id} />
          
            </div>
        ))
    }
    </div>
  )
}

export default Shoes