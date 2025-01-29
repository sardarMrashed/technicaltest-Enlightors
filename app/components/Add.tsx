'use client'
import { useState } from "react"
const Add = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
        <div className="bg-gray-100 py-2 px-4 rounded-3x flex items-center justify-between">
          <button className="cursor-pointer text-xl">-</button>
          {quantity}
         <button>+</button>
        </div>
    
        <div className="text-xs">  Only <span className="text-orange-500">{quantity} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
              </div>
      </div>
 {/* Add your code here */} 
 <button className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none">Add to Cart</button>
    /div
    </div>
  )
}

export default Add

