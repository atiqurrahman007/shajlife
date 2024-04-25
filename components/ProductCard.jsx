import Link from 'next/link';
import { API_URL } from "@/utils/urls";

const ProductCard =  ({products}) => {
  
    return (
        <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-5">
            {products?.map((item, index) => (
                <div key={index} className="h-[25rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <Link href={`/product/${item.slug}`}>
                        <img src={`${API_URL}/${item.thumbnail}`} alt="" className='w-full h-[15rem] object-cover rounded-t-xl'/>
                        <div className='px-4 py-3 '>
                            <span className='text-gray-400 uppercase text-xs'>Brand</span>
                            <p className='text-lg font-semibold text-black cursor-auto my-3'>{item.name}</p>
                        </div>
                        <div className='flex items-center px-4'>
                            <p className="text-lg font-semibold text-black cursor-auto my-3">${item.base_price}</p>
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div className="ml-auto  transition duration-300 hover:text-red-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;

