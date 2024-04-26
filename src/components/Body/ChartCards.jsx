import React from 'react'
import PieChartWithText from './PieChartWithText'
import GradientBlock from './GradientBlock'

const ChartCards = ({title}) => {
  return (
    <div className='rounded-2xl shadow-lg border border-gray-200 p-3 font-medium'>
        <p className=''>{title}</p>
        <PieChartWithText/>
        <div className='flex flex-col gap-2 '>
            <GradientBlock fromColor={'amber-300'} title={'Upcoming'} number={50}/>
            <GradientBlock fromColor={'indigo-500'} title={'Ongoing'} number={50}/>
            <GradientBlock fromColor={'teal-400'} title={'Completed'} number={50}/>
        </div>
    </div>
  )
}

export default ChartCards