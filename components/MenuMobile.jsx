import React from 'react'
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];


const MenuMobile = ({showCatMenu,setShowCatMenu, setMobileMenu}) => {
    return (
        <ul className="md:hidden flex flex-col top-[50px] h-[calc(100vh-50px)] w-full left-0 bg-white border-t text-black absolute">
            {data.map((item)=>{

                return (<React.Fragment key={item.id}>
                            {item?.subMenu?(

                             <li className="cursore-pointer px-5 py-4 flex flex-col border-b relative" 
                                 onClick={()=>setShowCatMenu(!showCatMenu)}>
                                  <div className="flex justify-between items-center">
                                     {item.name}
                                     <BsChevronDown size={14}/>
                                  </div>
                                  {showCatMenu && (
                                      <ul className="bg-black/[0.05] -mx-5 -mb-4 mt-4">
                                          {subMenuData?.map((submenu)=>{
                                             return(
                                                <Link key={submenu.id} href="/" onClick={()=>{
                                                    setShowCatMenu(false);
                                                    setMobileMenu(false)
                                                  }}>
  
                                                 <li className="py-4 px-8 flex border-t">
                                                     {submenu.name}
                                                  </li>
                                                
                                                </Link>
                                             );
                                          })}

                                      </ul>
                                  )}
                             </li>
                            ):(
                                <li className="px-5 py-4 flex flex-col border-b">
                                    <Link href={item?.url} onClick = {()=>setMobileMenu(false)}>{item.name}</Link>
                                </li> 
                            )}
                       </React.Fragment>)
            })}
            
        </ul>
    )
}

export default MenuMobile
