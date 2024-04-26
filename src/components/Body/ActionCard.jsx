import React from 'react'

const ActionCard = ({icon, title}) => {
  return (
    <div className='py-4 flex flex-col justify-center items-center bg-white w-full'>
        {icon}
        <p className='font-medium text-xs'>{title}</p>

    </div>
  )
}

export default ActionCard