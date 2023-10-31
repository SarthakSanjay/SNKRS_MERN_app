import React, { useState } from 'react'

const Profile = () => {
  const [display , setDisplay] = useState(false)
  const handleClick = () =>{
    setDisplay(prev => !prev)
  }
  return (
    <>
    <div
     className=" border-[1px] border-red-500  text-white cursor-pointer "
     onClick={handleClick}
     >Profile</div>

     {display ?
      <div className='h-[90vh] w-[300px] bg-pink-900 absolute z-100 top-[55px] right-0  '>
      side menu
     </div>
      : ""}

    </>
  )
}

export default Profile