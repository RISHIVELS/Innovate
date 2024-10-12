import React from "react";
// import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4 " id="Company">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            src="https://i.pinimg.com/736x/0d/fa/2c/0dfa2cca2dfe771328ae3f97facb46a2.jpg"
            className="w-[300px]  mx-auto my-4"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold sm:text-3xl text-center">
              Theory of Relativity
            </p>
            <h1 className="md-text-4xl sm:text-3xl text-2xl font-bold py-2 mt-4 text-center">
              E = mc2
            </h1>
            <p className="mt-5 mb-5 sm:text-xl font-semibold">
              The rules governing the way things move and interact are the same
              .For two observers moving at constant velocity with respect to one
              another. An object can be in motion for one observer and at rest
              for another.
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded font-medium my-6 md:mx-0 py-3 mx-auto  hover:text-black hover:bg-purple-300 hover:text-blacktransition-all duration-500 ease-in-out">
              Konow More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Analytics;
