import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4 " id="Company">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={Laptop} className="w-[500px] mx-auto my-4" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md-text-4xl sm:text-3xl text-2xl font-bold py-2 mt-4">
              Manage Data Analytics Centrally
            </h1>
            <p className="mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              temporibus libero non delectus, veritatis assumenda tenetur
              laborum officia consequatur. Possimus!
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded font-medium my-6 md:mx-0 py-3 mx-auto  hover:text-black hover:bg-purple-300 hover:text-blacktransition-all duration-500 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Analytics;
