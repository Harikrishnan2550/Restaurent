import React from 'react'
import assets from '../assets/assets'
import { IoMdHome } from "react-icons/io";
import { VscListSelection } from "react-icons/vsc";
import { FaRegFile } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { TfiBarChart } from "react-icons/tfi";
import { LuPencil } from "react-icons/lu";
import { BsCup } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { PiChatDotsBold } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import {Link, NavLink} from 'react-router-dom'


function Sidebar() {
  return (
    <div className='p-5 bg-white'>
    <div>
      <h1 className=''><img src={assets.img1} alt="image" className='w-[180px]' /></h1>
      </div>
        <div className='space-y-8 mt-10 ml-6 font-semibold'>
        <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? 'flex space-x-4 bg-green-200 text-green-600 py-2 px-3 rounded-md' : 'flex space-x-4'
        }>
        <span className='mt-1'><IoMdHome /></span>
        <h2> Dashboard</h2>
      </NavLink>
                <NavLink className='flex space-x-4'>
                <span className='mt-1'><VscListSelection/></span>
                <h2> Order List</h2>
                </NavLink>
                <Link className='flex space-x-4'>
                <span className='mt-1'><FaRegFile /></span>
                <h2> Order Detail</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><GoPeople /></span>
                <h2> Customer</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><TfiBarChart /></span>
                <h2> Analytics</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><LuPencil /></span>
                <h2>Reviews</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><BsCup /></span>
                <h2> Foods</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><HiOutlinePencilAlt /></span>
                <h2> Food Detail</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><AiOutlineUser /></span>
                <h2> Customer Detail</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span  className='mt-1'><CiCalendar /></span>
                <h2> Calendar</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><PiChatDotsBold /></span>
                <h2> Chat</h2>
                </Link>
                <Link className='flex space-x-4'>
                <span className='mt-1'><CiWallet /></span>
                <h2> Wallet</h2>
                </Link>
        </div>
    </div>
  )
}

export default Sidebar
