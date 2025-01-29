import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href="/detail" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-96">
          <Image 
            src="https://cdn.pixabay.com/photo/2016/12/15/15/18/golf-1909115_640.jpg" 
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image 
           src="https://cdn.pixabay.com/photo/2015/05/28/10/12/golf-787826_640.jpg"
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-between">
        <span className="font-medium">Product name</span>
        <span className="text-sm text-gray-600">$99.99</span>
        </div>
        <p className="text-sm text-gray-500">Product description</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity: 1</span>
          <button
           className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </div>
</Link>
  
    
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-96">
          <Image 
            src="https://cdn.pixabay.com/photo/2016/12/15/15/18/golf-1909115_640.jpg" 
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image 
           src="https://cdn.pixabay.com/photo/2015/05/28/10/12/golf-787826_640.jpg"
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-between">
        <span className="font-medium">Product name</span>
        <span className="text-sm text-gray-600">$99.99</span>
        </div>
        <p className="text-sm text-gray-500">Product description</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity: 1</span>
          <Link href='/detail'
           className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </Link>
        </div>

  
    
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-96">
          <Image 
            src="https://cdn.pixabay.com/photo/2016/12/15/15/18/golf-1909115_640.jpg" 
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image 
           src="https://cdn.pixabay.com/photo/2015/05/28/10/12/golf-787826_640.jpg"
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-between">
        <span className="font-medium">Product name</span>
        <span className="text-sm text-gray-600">$99.99</span>
        </div>
        <p className="text-sm text-gray-500">Product description</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity: 1</span>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </div>

  
    
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-96">
          <Image 
            src="https://cdn.pixabay.com/photo/2016/12/15/15/18/golf-1909115_640.jpg" 
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image 
           src="https://cdn.pixabay.com/photo/2015/05/28/10/12/golf-787826_640.jpg"
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-between">
        <span className="font-medium">Product name</span>
        <span className="text-sm text-gray-600">$99.99</span>
        </div>
        <p className="text-sm text-gray-500">Product description</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity: 1</span>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </div>

  
    
      </Link>
    </div>
  )
}

export default ProductList
