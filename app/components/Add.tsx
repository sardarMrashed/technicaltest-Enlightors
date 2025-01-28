import { useState } from "react"
const Add = () => {
  const [quantity, setQuantity]=useSata(1)
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="q"></div>
 {/* Add your code here */} 
 <button className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none">Add to Cart</button>
     
    </div>
  )
}

export default Add

