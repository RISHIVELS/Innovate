import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-2 text-gray-300 "
        id="Contact"
      >
        <div className="lg:col-span-1 lg:border-r border-r-white">
          <h1 className="-full text-3xl font-bold text-[#00df9a]">INNOVATE</h1>
          <p className="py-4">
            Join us in celebrating the wonders of science! Together, we can
            ignite curiosity, inspire innovation, and drive progress toward a
            brighter, more informed future. The next great discovery could be
            yours!
          </p>
          <div className="flex md:w-[75%] justify-between">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
          <p className="text-[12px] mt-10 text-red-500 text-center w-full">
            DEVELOPED BY RISHIVEL S
          </p>
        </div>
        <div className="flex items-center justify-center ml-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27juhODDLB24Kv0DUDgKX-miBUgaxdlqicw&s"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
