import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Image from "../Image/Image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
        <Image src="/logo.png" width={32} height={32} alt="Blog logo" />
        <span>.blog</span>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {isOpen ? (
          <>
            <IoClose
              className="cursor-pointer w-8 h-8 text-red-500 "
              onClick={() => setIsOpen(!isOpen)}
            />
          </>
        ) : (
          <>
            <IoMenu
              className="cursor-pointer w-8 h-8 text-teal-500 "
              onClick={() => setIsOpen(!isOpen)}
            />
          </>
        )}

        {/* Mobile Link List */}
        <div
          className={`  w-full h-screen flex flex-col items-center gap-8 font-lg justify-center absolute
         top-16      ${
           isOpen ? "-right-0" : "-right-[100%]"
         }  transition-all duration-500 ease-in-out`}
        >
          <a href="">Home</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-xl bg-blue-800 text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-xl bg-blue-800 text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
