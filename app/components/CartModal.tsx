
'use client'
import Image from "next/image"
const CartModal = () => {


  const cartItems = true;

  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-4 ">CartModal
    {!cartItems ? (
      <div className="flex justify-between items-center">
        <div className="text-lg">Cart is empty</div>
        
      </div>
    ) : (
      <div className="flex flex-col gap-8">
        {/* ITMES HERE  */}
        
      <div className="flex gap-4">
        <Image src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg"
           alt="cart" 
           width={72}
            height={96} 
            className="object-cover rounded-md"/>
       
       <div className="flex flex-col justify-between w-full gap-4">
  {/* Top Section */}
  <div>
    {/* Title and Price */}
    <div className="flex items-center justify-between gap-8">
      <h3 className="font-semibold text-gray-800">Product Name</h3>
      <div className="p-1 bg-gray-50 rounded-sm text-sm font-medium text-gray-600">
        $49
      </div>
    </div>

    {/* Description */}
    <div className="text-sm text-gray-600">Available</div>
  </div>

  {/* Button Section */}
  <div className="flex items-center justify-between text-sm text-gray-800">
    <span className="font-medium">Qty: 2</span>
    <button className="text-red-500 hover:underline">Remove</button>
  </div>
</div>

      </div>
      {/* /// */}
      <div className="flex gap-4">
        <Image src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg"
           alt="cart" 
           width={72}
            height={96} 
            className="object-cover rounded-md"/>
       
       <div className="flex flex-col justify-between w-full gap-4">
  {/* Top Section */}
  <div>
    {/* Title and Price */}
    <div className="flex items-center justify-between gap-8">
      <h3 className="font-semibold text-gray-800">Product Name</h3>
      <div className="p-1 bg-gray-50 rounded-sm text-sm font-medium text-gray-600">
        $49
      </div>
    </div>

    {/* Description */}
    <div className="text-sm text-gray-600">Available</div>
  </div>

  {/* Button Section */}
  <div className="flex items-center justify-between text-sm text-gray-800">
    <span className="font-medium">Qty: 2</span>
    <button className="text-red-500 hover:underline">Remove</button>
  </div>
</div>

      </div>
      
      </div>
    )}
    </div>
 
  )
}

export default CartModal
