import React from 'react'
import Link from 'next/link';
import {BsCart,BsHeart,BsPerson , BsSearch } from "react-icons/bs";
const  TopHeader = () => {
  return (
    <header className='w-full bg-white sticky top-0 z-20 py-4'>
       <div className='w-full h-[60px] max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between'>
          {/* Logo Start  */}
          <Link href="/">
                 <img src="/logo.png" alt="logo" className=" w-[40px] md:w-[120px] "/>
           </Link>
          {/* Logo End */}

          {/* SearchBar Start */}
            <div className='w-full max-w-xl relative '>
               <div className='flex'>
                   <span className='absolute top-4 left-5 text-lg'>
                      <BsSearch />
                    </span>
                    <input type="text"  className='w-full border border-r-0 border-red-400 rounded-l-md pl-12 py-3 focus:outline-none' placeholder='Search'/>
                    <button className='bg-red-400 border border-r-md text-white px-5 rounded-r-md'>Search</button>
               </div>
               <div className='absolute w-full mt-3 overflow-hidden rounded shadow bg-white z-30 divide-y divide-gray-300 px-2 py-2'>

                    <div className='cursor-pointer py-2 px-2 hover:bg-slate-100 flex items-center'>
                      
                      <img src="p1.png" alt="" className='w-16 h-16  rounded-md'/>
                      <div>
                        <h2 className='ml-2 text-gray-600 text-sm'>Olevs 6898 PU Leather Wrist Watch For Men - Black</h2>
                        <span className='ml-2 text-gray-600 text-sm'>12,00 tk</span>
                      </div>
                      
                    </div> 

                    <div className='cursor-pointer py-2 px-2 hover:bg-slate-100 flex items-center'>

                      <img src="p1.png" alt="" className='w-16 h-16  rounded-md'/>
                      <div>
                        <h2 className='ml-2 text-gray-600 text-sm'>Olevs 6898 PU Leather Wrist Watch For Men - Black</h2>
                        <span className='ml-2 text-gray-600 text-sm'>12,00 tk</span>
                      </div>
                      
                    </div>  

               </div>
            </div>
          {/* SearchBbar End */}

          {/* Icons */}

          <div className='flex items-center space-x-2' >
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full 
                          flex justify-center items-center bg-black/[0.03] hover:bg-red-400 transition
                           cursor-pointer relative group">
                       <BsHeart className="text-[15px] md:text-[20px] group-hover:text-white"/>
                       <div className="absolute h-[14px] md:h-[18px] min-w-[14px] md:min-w[18px] 
                            bg-red-400 group-hover:bg-orange-400 rounded-full top-1 left-5 md:left-7 flex justify-center items-center
                            text-white text-[10px] md:text-[12px] px-[2px] md:px-[5px]">2</div>
            </div>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full 
                          flex justify-center items-center hover:bg-black/[0.03] 
                           cursor-pointer relative">
                       <BsCart className="text-[15px] md:text-[20px]"/>
                       <div className="absolute h-[14px] md:h-[18px] min-w-[14px] md:min-w[18px] 
                            bg-red-400 rounded-full top-1 left-5 md:left-7 flex justify-center items-center
                            text-white text-[10px] md:text-[12px] px-[2px] md:px-[5px]">5</div>
            </div>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full 
                          flex justify-center items-center hover:bg-black/[0.03] 
                           cursor-pointer relative">
                       <BsPerson className="text-[15px] md:text-[20px]"/>
                       
            </div>
          </div>

       </div>
    </header>
  )
}

export default TopHeader;