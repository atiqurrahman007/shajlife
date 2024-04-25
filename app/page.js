// Add 'use client' directive at the top of the file

import Image from 'next/image';
import HeroBanner from '../components/HeroBanner';
import CategoryCard from '../components/CategoryCard';
import Wrapper from '../components/Wrapper';
import ProductCard from '@/components/ProductCard';

import { API_URL } from "@/utils/urls";

export default async function Home() {
  const products = await getData();
  return (
    <div>
      <HeroBanner />
      <Wrapper>
        <div>
          <CategoryCard />
        </div>

        <div>
       
          
              <ProductCard products ={products}/>
          
        </div>
      </Wrapper>
    </div>
  );
}


async function getData() {
  const res = await fetch(`${API_URL}/api/v1/products`, { cache: 'no-store' });
 
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
