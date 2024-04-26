import React from 'react'
import ChartCards from './ChartCards'
const Charts = () => {
  return (
    <div className='flex w-full gap-4 mt-5'>
       <div className="w-1/4"><ChartCards title='Orders' /></div>
      <div className="w-1/4"><ChartCards  title='Trips' /></div>
      <div className="w-1/4"><ChartCards  title='Revenue' /></div>
      <div className="w-1/4"><ChartCards  title='Expenses' /></div>

  </div>
  )}

export default Charts