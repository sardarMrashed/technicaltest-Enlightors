"use client"
import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap re'>
        <Link href="/test" className="relative w-full h-96">
        
              src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg" 
              alt="Product 1"
               fill sizes="25vw" 
               className="object-cover rounded-lg shadow-md" 
               />
                   <Image 
              src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg" 
              alt="Product 1"
               fill sizes="25vw" 
               className="object-cover rounded-lg shadow-md" 
               />

        </Link>
        
    </div>
  )
}

export default ProductList