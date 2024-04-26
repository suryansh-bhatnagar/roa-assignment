import React from 'react'

const GradientBlock = ({fromColor,title,number}) => {
  return (
    <div className={`flex justify-between px-3 py-1 text-sm rounded-md bg-gradient-to-l from-${fromColor}`}>
        <div>{title}</div>
        <div>{number}</div>
    </div>
  )
}

export default GradientBlock