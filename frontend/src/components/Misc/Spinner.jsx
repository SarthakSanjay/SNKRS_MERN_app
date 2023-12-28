import React from 'react'

const Spinner = () => {
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
    {/* <h1 className='text-white text-[40px]'>Loading ...</h1> */}
    <div className="flex justify-center items-center mt-10">
      <div className="w-16 h-16 border-t-4 border-pink-500 border-solid rounded-full animate-spin"></div>
    </div>
  </div>
  )
}

export default Spinner