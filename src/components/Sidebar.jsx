import React from 'react'
import Logo from '../assets/Logo'
import { MdDashboard ,MdAddToQueue, MdLabelImportantOutline ,MdOutlineLocalShipping,MdOutlineBusinessCenter ,MdOutlineAccountBalanceWallet,MdDynamicFeed,MdOutlineSettings   } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import TrainWaiting from '../assets/TrainWaiting';
import ParcelTracking from '../assets/ParcelTracking';

const Sidebar = () => {
  return (
    <div  style={{ width: '5%' }} className='fixed pl-4 pt-6 w-5/20 h-full bg-white text-2xl text-gray-500 drop-shadow-md'>
        <Logo/>
        <div className='mt-7 flex flex-col gap-5 pl-1'>
        <MdDashboard/>
        <MdAddToQueue />
        <MdLabelImportantOutline />
        <LuClipboardList/>
        <TrainWaiting/>
        <ParcelTracking/>
        <MdOutlineLocalShipping />
        <MdOutlineBusinessCenter/>
        <MdOutlineAccountBalanceWallet />
        <MdDynamicFeed />
        <MdOutlineSettings />
          </div>
    </div>
  )
}

export default Sidebar