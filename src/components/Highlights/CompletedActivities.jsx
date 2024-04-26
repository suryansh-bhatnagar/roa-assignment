import React from 'react'
import Name from './Text/Name'
import Load from './Text/Load'

const CompletedActivities = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>
        <span className='mb-3 text-sm font-medium'>Completed Activities (14)</span>
        <span className='underline text-xs font-medium cursor-pointer'>
            View All
        </span>

        </div>
        <div className='rounded-md border border-gray-300'>
        <div className='text-xs p-3 border-b border-gray-300'><Name> Gurpreet Singh </Name>  (Dispatch team) has created <Load> Load No. I-I-AAA-1325 </Load></div>
        <div className='text-xs p-3 border-b border-gray-300'><Name> Aman </Name> (Driver) Picked Up goods at <Load> Location_Name </Load> for <Load> Load No. I-I-AAA-1325 </Load></div>
        <div className='text-xs p-3 border-b border-gray-300'><Name> Gurpreet Singh </Name>  (Dispatch team) has created <Load> Load No. I-I-AAA-1325 </Load></div>
        <div className='text-xs p-3 border-b border-gray-300'><Load> Load No. I-I-AAA-1325 </Load> will start added by <Name> Gurpreet Singh </Name></div>
        </div>
    </div>
  )
}

export default CompletedActivities