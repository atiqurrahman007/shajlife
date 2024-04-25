
import React from 'react'
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import data from '@/public/data.json'
import { API_URL } from "@/utils/urls";

 const CategoryProduct = async ({ params}) => {
  let productData;
  try {
    const res = await fetch(`${API_URL}/api/v1/category/products/${params.slug}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
     productData = await res.json();
    // Now you can use productData for further processing or display
    console.log(productData);
  } catch (error) {
    console.error('Error fetching product details:', error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
 
  return (
    <div className='w-full py-4'>
        <Wrapper>
        {productData.length > 0 ? (
          <div >
           
              <ProductCard  products={productData} />
          
          </div>
        ) : (
          <p>No products found for the specified category.</p>
        )}
        </Wrapper> 
    </div>
  )
}
export default CategoryProduct;