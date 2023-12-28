import React, { useEffect, useState } from 'react'
import ShoeCard from '../shoes/ShoeCard'

const Men = () => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/category/men")
        .then((response) => response.json())
        .then((response) => setProduct(response.shoes))
        .catch(e => console.log(e.message))
    })
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

export default Men