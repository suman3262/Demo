import React from 'react'

const SelfMessage = ({msg}) => {
  console.log(msg);

  return (
    <div className='w-[75%] p-2 my-2 leading-[17.57px] bg-[#1C63D5] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] text-white'>
       {msg}
    </div>
  )
}

export default SelfMessage