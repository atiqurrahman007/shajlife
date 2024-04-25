"use client";

import React, {useState, useEffect} from 'react'
import Wrapper from './Wrapper';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Link from 'next/link';

import { BsCart,BsList,BsFilterRight  } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
const [mobileMenu, setMobileMenu] = useState(false)
const [showCatMenu, setShowCatMenu] = useState(false)
const [show, setShow] = useState('translate-y-0')
const [lastScrollY, setLastScrollY] = useState(0)
 
const controlNavbar = ()=>{
  if(window.scrollY>200){
    if(window.scrollY > lastScrollY && !mobileMenu){
      setShow("-translate-y-[80px]")
    }else{
      setShow("shadow-sm")
    }
  }else{
    setShow("translate-y-0")
  }

  setLastScrollY(window.scrollY)
}

     useEffect(()=>{
       window.addEventListener("scroll", controlNavbar);

       return()=>{
         window.removeEventListener("scroll", controlNavbar);
       }

     })
    return (
        <header className={`w-full h-[50px] md:h-[60px] bg-white  sticky top-0 z-10 transition-transform duration-300 ${show}`}>
           <Wrapper className="h-full  flex justify-start md:justify-center items-center">
             {/* mobile icon start */}
             <div className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full 
                          flex justify-center items-center hover:bg-black/[0.03] 
                           cursor-pointer relative">
                          {mobileMenu?(

                            <VscChromeClose  className="text-[16px]" onClick={()=>setMobileMenu(false)}/>

                          ):( <BsList className="text-[16px] md:text-[20px]" onClick={()=>setMobileMenu(true)}/>)}
                </div>  
                {/* mobile icon start */}   
              
               <Menu showCatMenu={showCatMenu}
                      setShowCatMenu={setShowCatMenu}
                />

                {mobileMenu&& (<MenuMobile showCatMenu={showCatMenu} 
                            setShowCatMenu={setShowCatMenu} 
                            setMobileMenu={setMobileMenu} />
                  )}
                
           </Wrapper>
        </header>
    )
}

export default Header
