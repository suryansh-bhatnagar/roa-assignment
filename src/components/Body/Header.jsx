import React from 'react'
import { IoSearchOutline ,IoEllipsisVertical } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";


const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='text-2xl font-medium'>
            Dashboard
        </div>
        <div className='flex gap-4 rounded-full text-xl shadow-lg border border-gray-200 items-center px-3'>
        <IoSearchOutline />
       <span className='text-sm text-gray-400 pb-1 font-thin'>|</span>
        <FaRegBell />
        <span className='text-sm text-gray-400 pb-1 font-thin'>|</span>
        <IoEllipsisVertical />
        </div>
    </div>
  )
}

export default Header