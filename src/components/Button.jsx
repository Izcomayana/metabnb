import React from 'react'

const Button = ({children, openModal}) => {
  return (
    <button onClick={openModal} className='bg-[#A02279] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-[#d749aa] 
    duration-500'>
      {children}
    </button>
  )
}

export default Button