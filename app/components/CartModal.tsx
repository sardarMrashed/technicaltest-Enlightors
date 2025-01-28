'use client'
import Image from "next/image"
const CartModal = () => {


  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-4 ">CartModal
    {!cartItems ? (
      <div className="flex justify-between items-center">
        <div className="text-lg">Cart is empty</div>
        
      </div>
    ) : (
      <div className="flex justify-between items-center">
        <Image src="https://pixabay.com/photos/building-skyscraper-9340309/"
           alt="cart" 
           width={72}
            height={96} 
            className="object-cover rounded-md"/>
            <div className="">
              {/* Top */}
              <div className="n">
              {/* TITLE */}
              <div className="n"><h3>Product Name</h3></div>
              {/* Price */}
              <div className="n">$49</div>
              {/* DESC */}
              <div className="n">Available</div>
              </div>
               {/* button */}
        </div>
      </div>
    )}
    </div>
 
  )
}

export default CartModal