import React from 'react'
import { MdLabelImportantOutline, MdOutlineLocalShipping } from 'react-icons/md'
import { FaRegUser } from "react-icons/fa";
import ActionCard from './ActionCard'
import Trailer from '../../assets/Trailer'

const Actions = () => {
  return (
    <div className='mt-6'>
      <p className='font-medium text-base'>Quick Actions</p>
      <div className='flex justify-between bg-white shadow-lg border border-gray-100 mt-3'>
      <ActionCard icon={ <MdLabelImportantOutline fontWeight={500} fontSize={20} />} title='Create Indents'/>
      <div className='border border-stone-300 my-3'></div>
      <ActionCard icon={ <MdOutlineLocalShipping fontWeight={500} fontSize={20} />} title='Create Indents'/>
      <div className='border border-stone-300 my-3'></div>
      <ActionCard icon={ <Trailer fontWeight={500} fontSize={20} />} title='Create Indents'/>
      <div className='border border-stone-300 my-3'></div>
      <ActionCard icon={ <FaRegUser fontWeight={500} fontSize={20} />} title='Create Indents'/>
      <ActionCard icon={ <Trailer fontWeight={500} fontSize={20} />} title='Create Indents'/>
      <div className='border border-stone-300 my-3'></div>
      <ActionCard icon={ <MdOutlineLocalShipping fontWeight={500} fontSize={20} />} title='Create Indents'/>
      </div>
    </div>
  )
}

export default Actions