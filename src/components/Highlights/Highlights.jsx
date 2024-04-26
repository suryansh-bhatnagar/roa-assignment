import React from 'react'
import HighlightsCard from './HighlightsCard'
import CompletedActivities from './CompletedActivities'
import ScheduledActivities from './ScheduledActivities'

const Highlights = () => {
  return (
    <div className='w-1/5 h-full fixed right-0 bg-white drop-shadow-md px-4 pt-4'>
      <p className='font-medium'>Todays Highlights (14)</p>
      <p className='text-xs'>19 Mar 2024</p>
      <div className='flex mt-3 gap-3'>
        <HighlightsCard title={'Income'} amount={'100000 CAD'} payments={'2 payments received'}/>
        <HighlightsCard title={'Expenses'} amount={'50000 CAD'} payments={'5 payments paid'}/>
      </div>
      <div className='mt-4'>
      <CompletedActivities/>
      <ScheduledActivities/>
      </div>
    </div>
  )
}

export default Highlights