"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { fetchDataFromApi } from '@/utils/api';

import { BsChevronDown } from "react-icons/bs";


const Menu = ({showCatMenu, setShowCatMenu}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(null);
    const [data, setData] = useState({ data: [] })
    useEffect( ()=>{
        fetchCategory();
      }, [])
    
      const fetchCategory = async ()=>{
        const response  = await fetchDataFromApi('/api/v1/categories');
        setData({ data: response.data });
      }

    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        {data.data.map((item, index) => (
            <React.Fragment key={index}>
                {item?.children? (
                    <li
                        className="cursor-pointer flex items-center gap-2 relative"
                        onMouseEnter={() => {
                            setShowCatMenu(true);
                            setActiveItemIndex(index);
                          }}
                          onMouseLeave={() => {
                            setShowCatMenu(false);
                            setActiveItemIndex(null);
                          }}
                    >
                        {item.name}
                        <BsChevronDown size={14} />
                        {showCatMenu && activeItemIndex === index && (
                            <ul className="bg-white absolute shadow-lg top-6 left-0 min-w-[250px] px-1 py-1 text-black">
                                {item.children.map((childItem, childIndex) => (
                                    <Link key={childIndex} href={`/category/${childItem.slug}`} onClick={() => setShowCatMenu(false)}>
                                        <li className="h-12 flex items-center px-3 hover:bg-black/[0.03] rounded-md">{childItem.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>
                ) : (
                    <li className="cursor-pointer">
                        <Link href={item?.url}>{item.name}</Link>
                    </li>
                )}
            </React.Fragment>
        ))}
    </ul>
    
    )
}

export default Menu
