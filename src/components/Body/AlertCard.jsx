import React from 'react'


const AlertCard = ({icon,title,load,bill,description}) => {
  return (
    <div className='shadow-lg border border-gray-100 rounded-2xl px-4 py-3'>
        <div className='flex justify-between '>
            <div className='flex gap-3'>
                <div className='bg-indigo-100 p-3 flex items-center justify-center rounded-md'>
                {icon}
                </div>
                <div>
                    <p className='text-sm font-medium'>{title}</p>
                    <p className='text-xs'>Load No : {load}, Bill To : {bill}</p>
                </div>
            </div>
            <p className='text-xs'>13 Feb 24</p>
        </div>
        <p className='mt-3 text-sm'>{description}</p>
        <div className='flex flex-row-reverse gap-10 text-sm'>
            <div className='bg-blue-900 text-white px-3 py-1 rounded-md'> 
            Resolve
            </div>
            <div className='text-blue-900 underline'>
                Ignore
            </div>
            
        </div>
    </div>
  )
}

export default AlertCard