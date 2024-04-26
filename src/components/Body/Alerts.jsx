import React from 'react'
import AlertCard from './AlertCard'
import { FaRegUser } from 'react-icons/fa'
import { MdDeviceThermostat } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
const Alerts = () => {

  const alertData=[
    {icon :<FaRegUser fontSize={14}/> ,title :'Driver Raised Concern', load:'12454', bill:'RoaDo demo Bangalore' ,description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua'},
    {icon :<MdDeviceThermostat /> ,title :'Reefer Temp. out of range', load:'12454', bill:'RoaDo demo Bangalore' ,description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua'}
  ]

  return (
    <div className='my-6'>
      <div className='flex justify-between '>
           <p className='font-medium text-base mb-4'> High Priority alerts (14)</p>
           <div className='flex items-center gap-2 text-blue-900 text-sm'>
           <p className=''>View All  </p>
           <MdNavigateNext fontSize={18} />
           </div>
      </div>
           <div className='flex w-full gap-16'>
            {
              alertData.map((alert,index)=> <AlertCard icon={alert.icon} bill={alert.bill} description={alert.description} load={alert.load} title={alert.title} key={index}/>)
            }
           </div>
    </div>
  )
}

export default Alerts