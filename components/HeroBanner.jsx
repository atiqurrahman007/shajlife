'use client'
import React, { useEffect, useState } from 'react'; 
import Wrapper from '@/components/Wrapper'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import { BiArrowBack, BiMenu , BiChevronRight  } from "react-icons/bi";

import { API_URL } from "@/utils/urls";
import { fetchDataFromApi } from '@/utils/api'

const HeroBanner = () => {
    const [slider, setSlider] =  useState([])
    useEffect(()=>{
        fetchCategory();
    },[])

    const fetchCategory = async ()=>{
        const response  = await fetchDataFromApi('/api/v1/sliders');
        console.log(response)
        setSlider(response);
      }

    return (
        <div className="  w-full ">
         <Wrapper className='grid grid-cols-12 items-start gap-2 '>
            <div className='col-span-3  flex items-center flex-col'>
                <div className='w-full flex items-center justify-center bg-red-400 rounded-md p-2'>
                    <BiMenu className='text-white text-2xl font-semibold' />
                    <span className='text-xl text-white uppercase font-semibold'>Top Category</span>
                </div>
                <div className='w-full bg-white shadow-md divide-y divide-gray-300 rounded-b-md block relative'>
                    
                    <a href="" className='w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition group'>
                       <div className='flex items-center'>
                         <img src="p1.png" alt="" className='w-5 h-5 object-contain '/>
                         <span className='ml-2 text-gray-600 text-sm'>Unstitched</span>
                       </div>
                       <BiChevronRight  />

                       <div className='absolute w-[800px]  bg-white z-20  left-full  bottom-0 top-0 hidden group-hover:block transition ease-in-out delay-150'>
                           <h5>Unstitched</h5>
                       </div>
                   
                    </a>

                   
                    

                    <a href="" className=' px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition group'>
                       <div className='flex items-center'>
                         <img src="p1.png" alt="" className='w-5 h-5 object-contain '/>
                         <span className='ml-2 text-gray-600 text-sm'>Women's Clothes</span>
                       </div>
                       <BiChevronRight  />

                       <div className='absolute w-[800px]  bg-white z-20  left-full  bottom-0 top-0 hidden group-hover:block transition ease-in-out delay-150'>
                           <h5>Women's Clothes</h5>
                        </div>

                    </a>

                    <a href="" className=' px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition group'>
                       <div className='flex items-center'>
                         <img src="p1.png" alt="" className='w-5 h-5 object-contain '/>
                         <span className='ml-2 text-gray-600 text-sm'>Maternity</span>
                       </div>
                       <BiChevronRight  />

                       <div className='absolute w-[800px]  bg-white z-20  left-full  bottom-0 top-0 hidden group-hover:block transition ease-in-out delay-150'>
                           <h5>Maternity</h5>
                        </div>

                    </a>
                </div>
            </div>
           <Carousel className='col-span-9' autoPlay={true} 
                      infiniteLoop={true} 
                      showThumbs={false} 
                      showIndicators={false} 
                      showStatus={false}
                      renderArrowPrev={(clickHandler, hasPrev)=>(
                          <div onClick={clickHandler} className="absolute bottom-0 right-[31px] md:right-[51px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] 
                                         bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
                              <BiArrowBack className="text-sm md:text-lg" />
                          </div>
                      )}
                      renderArrowNext={(clickHandler, hasNext)=>(
                        <div onClick={clickHandler} className="absolute bottom-0 right-0 0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] 
                                       bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
                            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                        </div>
                    )}>
               
                   {slider.map((item, index)=>{
                    return (
                        <div key={index}>
                            <img  src={`${API_URL}/${item.desk_image}`} className="aspect-[16/10] md:aspect-auto object-cover" alt={`Slider ${index + 1}`} />
                            <div className="text-black/[0.9] text-[15px] md:text-[30px] bg-white px-[10px] md:px-[40px] py-[10px] md:py-[25px]
                                            absolute left-0 bottom-[25px] md:bottom-[75px] uppercase font-medium hover:opacity-90">
                                SHOP NOW
                            </div>
                        </div>
                    );
                   })}
             
                
               
                
            </Carousel>

            </Wrapper>
        </div>
    );
}

export default HeroBanner
