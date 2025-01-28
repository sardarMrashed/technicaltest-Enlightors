"use client"
import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap re'>
        <Link href="/test" className="relative w-full h-96">
              <Image src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg" alt="Product 1" fill sizes="25vw" className="object-cover rounded-lg shadow-md" />
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