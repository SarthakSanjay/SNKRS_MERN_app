import React from 'react'

const Notification = ({noti,title}) => {
  return (
    
     <div className={`border-[2px] h-20 w-48 p-2 border-green-500 text-green-500 flex justify-center items-center ${noti} `}>
            {title}
     </div>
  )
}

export default Notification