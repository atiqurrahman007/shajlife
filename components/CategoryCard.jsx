
import Link from 'next/link'
import { API_URL } from "@/utils/urls";

const CategoryCard = async () => {
    const homeCategories = await getData();
   
    return (
           <div  className="grid grif-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
             {homeCategories?.map((item, index)=>(
                <Link key={index} href={`/category/${item.category.slug}`} className="text-center transform overflow-hidden bg-white duration-200 hover:scale-105"> 
                <img src="/product-1.webp" alt=""/>
                <h2 className="pt-4 uppercase font-semibold ">{item.category.name}</h2>
                </Link>
             ))}
                
            </div>    
    )
}

export default CategoryCard



async function getData() {
    const res = await fetch(`${API_URL}/api/v1/home/categories`, { cache: 'no-store' });
   
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
   
    return res.json();
}
