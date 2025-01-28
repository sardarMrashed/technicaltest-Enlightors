"use client"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap re'>
        <Link href="/test" className="relative">
              <Image src="" alt="Product 1" fill sizes="25vw" className="object-cover rounded-lg shadow-md" />
        </Link>
        <Link href="/product/2">
            <div className='w-1/3 h-96 bg-gray-100 flex flex-col justify-end p-4'>
                <h2 className='text-2xl font-bold'>Product 2</h2>
                <p className='text-lg font-light'>$100</p>
            </div>
        </Link>
        <Link href="/product/3">
            <div className='w-1/3 h-96 bg-gray-100 flex flex-col justify-end p-4'>
                <h2 className='text-2xl font-bold'>Product 3</h2>
                <p className='text-lg font-light'>$100</p>
            </div>
        </Link>
    </div>
  )
}

export default ProductList