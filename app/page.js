import React from 'react'
import Image from 'next/image'
import HeroBanner from '../components/HeroBanner'
import CategoryCard from '../components/CategoryCard'

import Wrapper from '../components/Wrapper'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    image: '/product-1.webp',
  },
  {
    image: '/product-2.webp',
  },
  {
    image: '/product-3.webp',
  },
  {
    image: '/product-4.webp',
  },
  {
    image: '/product-1.webp',
  },
  {
    image: '/product-2.webp',
  },
];

export default function Home() {
  return (
     <div>
           <HeroBanner />
           <Wrapper>
             <div className="grid grif-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
               <CategoryCard/>
               <CategoryCard/>
               <CategoryCard/>
            </div> 

             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-5'>
              {products.map((product, index) => (
                <ProductCard key={index} image={product.image} />
              ))}
                 
             </div>
           </Wrapper>
         
     </div>
  )
}
