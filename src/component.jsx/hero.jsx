import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <>
      <div className="text-white" id="Home">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center">
          <p className="text-[#00df9a] font-bold p-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            Grow with data.
          </h1>
          <div className="flex justify-center items-center py-4">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold pt-2 ">
              Fast, flexible financing for
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold pt-2 md:pl-4 pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={150}
              backSpeed={140}
              loop
            ></ReactTyped>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 text-center mx-auto">
            Monitor your data analytics to increase reverse for BTB, BTC & SASS
            platforms.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto py-3 text-black hover:bg-purple-300 hover:text-blacktransition-all duration-500 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
