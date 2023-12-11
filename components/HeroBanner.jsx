'use client'
import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className="relative text-white w-full max-w-[1360px] mx-auto">
           <Carousel autoPlay={true} 
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
                <div>
                    <img src="/slide-1.png" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <div className="text-black/[0.9] text-[15px] md:text-[30px] bg-white px-[10px] md:px-[40px] py-[10px] md:py-[25px]
                                   absolute left-0 bottom-[25px] md:bottom-[75px] uppercase font-medium hover:opacity-90">SHOP NOW</div>
                </div>
                <div>
                    <img src="/slide-2.png" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <div className="text-black/[0.9] text-[15px] md:text-[30px] bg-white px-[10px] md:px-[40px] py-[10px] md:py-[25px]
                                   absolute left-0 bottom-[25px] md:bottom-[75px] uppercase font-medium hover:opacity-90">SHOP NOW</div>
                </div>
                <div>
                    <img src="/slide-3.png" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <div className="text-black/[0.9] text-[15px] md:text-[30px] bg-white px-[10px] md:px-[40px] py-[10px] md:py-[25px]
                                   absolute left-0 bottom-[25px] md:bottom-[75px] uppercase font-medium hover:opacity-90">SHOP NOW</div>
                </div>
                
            </Carousel>
        </div>
    );
}

export default HeroBanner
