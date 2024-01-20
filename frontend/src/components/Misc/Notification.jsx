import React from 'react'

const Notification = ({text , wishlist}) => {
  if(wishlist){
    return  <div className={`border-[2px] h-20 w-48 p-2 border-pink-500 text-pink-500 flex justify-center items-center  absolute left-1/2 transform -translate-x-1/2 z-10 bg-pink-950 `}>
    {text}
</div>
  }
  return (
    
     <div className={`border-[2px] h-20 w-48 p-2 border-green-500 text-green-500 flex justify-center items-center  absolute left-1/2 transform -translate-x-1/2 z-10 bg-green-950 `}>
            {text}
     </div>
  )
}

export default Notification