
import React from 'react'

const OtherChat = ({img,msg}) => {
  console.log(img,msg);
  return (
    <>
          <div className=' w-[85%] flex gap-2 my-2 '>
             <img src={img} alt="/user_profile" loading='lazy' className='rounded-full w-10 h-10' />

             <p className='shadow-lg bg-white text-[#606060] p-2 rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] leading-[18px]'>{msg}</p>
          </div>
    </>
  )
}

export default OtherChat