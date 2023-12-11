import React from 'react'
import Link from 'next/link'

const CategoryCard = () => {
    return (
        
            <Link href="/category/1" className="text-center transform overflow-hidden bg-white duration-200 hover:scale-105"> 
               <img src="/product-1.webp" alt=""/>
               <h2 className="pt-4 uppercase font-semibold ">Category Name Here</h2>
            </Link>    
    )
}

export default CategoryCard
