/*
lee wonho
facebook clone project Header component
2022 08 08
*/

import React from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import {GrHomeRounded} from 'react-icons/gr'
import {RiFlag2Line} from 'react-icons/ri'
import {MdOutlineOndemandVideo, MdExpandMore} from 'react-icons/md'
import {FiShoppingBag} from 'react-icons/fi'
import {FaGamepad} from 'react-icons/fa'
import {TbGridDots} from 'react-icons/tb'
import {AiOutlineMessage, AiOutlineBell} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16" >
        {/* LEFT */}
        <div className="flex min-w-fit"> 
            <Image 
            src = "https://cdn-icons-png.flaticon.com/512/44/44646.png"
            height={40}
            width={40} 
            />
            <div className='flex items-center space-x-2 px-2 ml-2 bg-gray-100 text-gray-500 rounded-full'>
                <FaSearch size = {20}/>
                <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder="Search"/>    
            </div>
        </div>
        {/* CENTER */}
        <div className='flex flex-grow justify-center mx-2'>
            <div className='flex items-center'>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <GrHomeRounded className='mx-auto' size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <RiFlag2Line className='mx-auto' size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <MdOutlineOndemandVideo className='mx-auto' size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <FiShoppingBag className='mx-auto' size={25}/>
                </div>
                <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <FaGamepad className='mx-auto' size={25}/>
                </div>
            </div>
        </div>
        {/* RIGHT */}
        <div className='flex items-center justify-end min-w-fit space-x-2'>
            <Image 
            src = "https://cdn-icons-png.flaticon.com/512/44/44646.png"
            height={40}
            width={40} 
            />
            <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs'>Wonho</p>
            <TbGridDots size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
            <AiOutlineMessage size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
            <AiOutlineBell size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
            <MdExpandMore size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'/>
        </div>
    </div>
  )
}

export default Header