import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 text-white">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">
              Want to know about New Innovations?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 flex w-full rounded-md text-black"
              />
              <button className="bg-[#00df9a] text-black w-[200px] rounded font-bold my-6  py-3  px-6 ml-4  hover:bg-red-300 hover:text-black transition-all duration-500 ease-in-out">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
