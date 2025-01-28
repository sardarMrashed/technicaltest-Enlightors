"use client"
import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
    {
        id: 1,
        name: "Golf Club Set",
        price: "$299.99",
        description: "High-quality golf club set with everything you need to improve your game.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg",
        link: "/product/golf-club-set"
      },
      {
        id: 2,
        name: "Digital Camera",
        price: "$499.99",
        description: "Capture stunning photos with this easy-to-use digital camera.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/30/02/53/iphone-2697322_1280.jpg",
        link: "/product/digital-camera"
      },
      {
        id: 3,
        name: "Laptop Sleeve",
        price: "$29.99",
        description: "Protect your laptop with this stylish and durable sleeve.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/07/06/01/47/laptop-2472854_1280.jpg",
        link: "/product/laptop-sleeve"
      },
      {
        id: 4,
        name: "Bluetooth Headphones",
        price: "$79.99",
        description: "Wireless headphones with superb sound quality and comfort.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/07/10/38/headphones-2599264_1280.jpg",
        link: "/product/bluetooth-headphones"
      },
    ];
     
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap re'>
        <Link href="/test" className="">
        <div className="relative w-full h-96">
        <Image 
              src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg" 
              alt="Product 1"
               fill sizes="25vw" 
               className="absolute rounded-lg shadow-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                   <Image 
              src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg" 
              alt="Product 1"
               fill sizes="25vw" 
               className="absolute rounded-lg shadow-md" 
               />
               </div>

        </Link>
        
    </div>
  )
}

export default ProductList