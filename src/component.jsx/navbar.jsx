import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 sm:w-full ">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">INNOVATE</h1>

        <ul className="hidden md:flex">
          <li className="p-4 hover:text-red-500 transition-all duration-200">
            Home
          </li>
          <li className="p-4 hover:text-red-500 transition-all duration-200">
            <a href="#Company">Innovation</a>
          </li>
          <li className="p-4  hover:text-red-500 transition-all duration-200">
            <a href="#Resources">TopFinds</a>
          </li>
          <li className="p-4  hover:text-red-500 transition-all duration-200">
            <a href="#Contact">About</a>
          </li>
          <li className="p-4  hover:text-red-500 transition-all duration-200">
            <a href="#Contact">Conatct</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed top-0 left-0 border-r w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            INNOVATE
          </h1>
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600">
              {" "}
              <a href="#Home">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#Company">Innovation</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#Resources">TopFinds</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#Contact">About</a>
            </li>
            <li className="p-4 ">
              <a href="#Contact">Conatct</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-20">
        {" "}
        <h1 className=" text-5xl font-bold text-red-500 text-center">
          "Curiosity is the Engine of Discovery"
        </h1>
      </div>
    </>
  );
};

export default Navbar;
