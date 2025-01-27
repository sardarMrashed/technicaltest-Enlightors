"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import CartModal from "./CartModal";
const NavIcons = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
       const router = useRouter();
 
    // Temporarily commented out the isLoggedIn variable

    const isLoggedIn = false;


    const handleProfile = () =>{
        // Logic to handle the profile click when user is logged in
        if (isLoggedIn){
       router.push("/login");
        return;
        }
        setIsOpenProfile((prev) => !prev);
    };




  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
             {/* Profile Icon */}
        <Image src="/profile.png"
         alt="profile"
          width={22} 
          height={22}
           className="cursor-pointer"
              onClick={handleProfile}
           />
          {isOpenProfile && (
            <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
              <Link href="/profile"className="block hover:underline">Profile</Link>
                <div className="mt-2 cursor-pointer"onClick={() => router.push("/logout")}>Logout</div>
            </div>
          )}
          
          {/* Cart Icon */}
          <div className="relative cursor-pointer">
        <Image 
        src="/cart.png" 
        alt="cart" 
        width={22} 
        height={22}
         className="cursor-pointer"
         onClick={() => setIsOpenCart((prev) => !prev)}
          />
       
           <div className="absolute -top-2 -right-2">0</div>
</div>
      {
        isOpenCart &&<CartModal /> 
        
      }
    </div>
  )
}

export default NavIcons
