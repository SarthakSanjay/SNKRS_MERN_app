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
    <div className="w-screen p-10 flex flex-wrap">
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