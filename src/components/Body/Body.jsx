import React from 'react'
import Header from './Header'
import Charts from './Charts'
import Actions from './Actions'
import Alerts from './Alerts'

const Body = () => {
  return (
    <div style={{marginLeft:'5%'}} className='w-3/4 h-full bg-slate-50 px-5 pt-4'>
      <Header/>
      <Charts/>
      <Actions/>
      <Alerts/>
    
    </div>
  )
}

export default Body