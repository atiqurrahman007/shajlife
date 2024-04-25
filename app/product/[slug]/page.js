
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import Wrapper from '@/components/Wrapper'
import { API_URL } from "@/utils/urls";

import { FaCartPlus } from "react-icons/fa6";

const ProductDetails = async ({params}) => {
  let productData;
  try {
    const res = await fetch(`${API_URL}/api/v1/product/${params.slug}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
     productData = await res.json();
    // Now you can use productData for further processing or display
    // console.log(productData);
  } catch (error) {
    console.error('Error fetching product details:', error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
 
 
  return (
    <div className='w-full md:py-5 '>
      <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              {/* left column start */}
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                   <ProductDetailsCarousel  images={productData.thumbnail}/>
              </div>
              {/* left column end */}
             
              {/* right column start */}
              <div className="flex-[1] py-3">
                  {/* PRODUCT TITLE */}
                  <h1 className="text-[22px] font-semibold mb-2 leading-tight">
                    {productData?.name}
                  </h1>
                 
                    {/* PRODUCT PRICE */}
                    <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#2547;{productData?.base_price}
                            </p>
                     </div>
                    

                      {/* PRODUCT SIZE RANGE START */}
                      <div className="mt-10 mb-10">

                           
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Color
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}
                            

                            {/* SIZE START */}
                            <div className='grid grid-cols-4 gap-1 pb-5'>
                              <div className="avatar">
                                <div className="w-16  rounded-md">
                                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                              </div>
                               <div className="avatar">
                                <div className="w-16  rounded-md">
                                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                              </div>

                               <div className='hover:border-black cursor-pointer'>
                                 <img className='w-16  rounded-md' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                               </div>
                               <div className='hover:border-black cursor-pointer'>
                                 <img className='w-16  rounded-md' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                               </div>
                                
                               
                            </div>
                            {/* SIZE END */}
                            

                            <div className="overflow-x-auto">
                                <table className="table text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                  {/* head */}
                                  <thead>
                                    <tr className='text-center bg-base-200 text-black'>
                                     
                                      <th>Size</th>
                                      <th>price</th>
                                      <th>Quantity</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* row 1 */}
                                    <tr className=" text-center">
                                    
                                      <td>S</td>
                                      <td>150 tk</td>
                                      <td>10</td>
                                      <td>
                                      
                                      <button className="btn btn-success text-white">
                                         <FaCartPlus />
                                      </button>
                                      </td>
                                    </tr>

                                     {/* row 2 */}
                                    <tr className=" text-center">
                                    
                                      <td>S</td>
                                      <td>150 tk</td>
                                       <td>10</td>
                                      <td>
                                      
                                      <button className="btn btn-success text-white">
                                         <FaCartPlus />
                                      </button>
                                      </td>
                                    </tr>
                                  
                                  </tbody>
                                </table>
                              </div>
                      </div>
                      {/* PRODUCT SIZE RANGE END */}


                      {/* ADD TO CART BUTTON START */}
                      <div className="w-full py-4 rounded-full bg-black text-white text-center text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                          Add To Cart
                      </div>
                      {/* ADD TO CART BUTTON END */}
                         {/* PRODUCT SUBTITLE */}
                     <div className="text-lg font-semibold mb-5">
                        PRODUCT SUBTITLE  
                      </div> 
                      <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                              {productData?.description}
                            </div>
                        </div>  


             </div>
              {/* right column end */}
          </div>

          {/* Related products */}
          <div>
           
          </div>
      </Wrapper>
     
      
      </div>
  )
}

export default ProductDetails