import React from 'react'

const HighlightsCard = ({title, amount,payments}) => {
  return (
    <div className='w-2/4 border border-gray-300 rounded-md p-2 text-gray-600'>
        <p className='text-xs'>{title}</p>
        <p className={`text-base font-medium ${title==='Income' ? 'text-green-700' : 'text-red-700'} `}>{amount}</p>
        <p className='text-xs'>{payments}</p>
    </div>
  )
}

export default HighlightsCard