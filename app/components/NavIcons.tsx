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
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setIsOpenProfile((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
      {/* Profile Icon */}
      <div className="relative">
        <Image
          src="/profile.png"
          alt="profile"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={handleProfile}
        />
        {isOpenProfile && (
          <div className="absolute top-12 right-0 bg-white p-4 w-40 rounded-md shadow-lg z-50">
            <Link href="/profile" className="block text-gray-700 hover:underline">
              Profile
            </Link>
            <div
              className="mt-2 cursor-pointer text-red-500 hover:underline"
              onClick={() => router.push("/logout")}
            >
              Logout
            </div>
          </div>
        )}
      </div>

      {/* Cart Icon */}
      <div className="relative">
        <Image
          src="/cart.png"
          alt="cart"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => setIsOpenCart((prev) => !prev)}
        />
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex justify-center items-center">
          2
        </div>
      </div>

      {/* Cart Modal */}
      {isOpenCart && (
        <div className="absolute top-14 right-0 bg-white shadow-lg p-4 w-64 rounded-md z-50">
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
