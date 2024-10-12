import React from "react";
// import Single from "../assets/single.png";
// import Double from "../assets/double.png";
// import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white" id="Resources">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-60 rounded-full mx-auto mt-[-3rem] bg-white"
              src="https://cdn.mos.cms.futurecdn.net/YMmXansNx3hyMvqjWytbiS-970-80.jpg"
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Internet</h2>
            <p className="text-center text-xl font-bold">by-ARPA</p>
            <div className="text-center font-medium mt-5">
              <p>
                The internet is a global system of interconnected computer
                networks that is used by billions of people worldwide. In the
                1960s, a team of computer scientists working for the U.S.
                Defense Department's ARPA (Advanced Research Projects Agency)
                built a communications network to connect the computers in the
                agency, called ARPANET, the predecessor of the internet. It used
                a method of data transmission called "packet switching",
                developed by computer scientist and team member Lawrence
                Roberts, based on prior work of other computer scientists.{" "}
              </p>
            </div>
            <button className="bg-[#00df9a] text-black  rounded-md font-medium my-6  py-3  px-6 mx-auto w-[200px]">
              Know more
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300 md:my-0 my-8">
            <img
              className="w-60 rounded-full mx-auto mt-[-3rem] bg-white bg-transparent"
              src="https://cdn.mos.cms.futurecdn.net/rARyySyeWryRUYDTq4t4dQ-970-80.jpg"
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Magnifying Glass
            </h2>
            <p className="text-center text-xl font-bold">
              by- Franciscan friar & Roger Bacon{" "}
            </p>
            <div className="text-center font-medium mt-4">
              <p>
                Franciscan friar and Oxford University scholar Roger Bacon first
                developed the magnifying glass in 1268. Sometimes dubbed
                "Britain's first scientist,"' Bacon's magnifying glass built on
                research by Muslim scholars. However, the use of optical tools
                dates back much further. Evidence suggests that as early as 700
                B.C., people in ancient Egypt noticed that they could look
                through crystals to improve vision.
              </p>
            </div>
            <button className="bg-black text-[#00df9a] rounded-md font-medium my-6  py-3  px-6 mx-auto w-[200px]">
              Know more
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-60 rounded-full mx-auto mt-[-3rem] bg-white"
              src="https://cdn.mos.cms.futurecdn.net/HPx6bvYd94jwBuCWsjNAaF-970-80.jpg"
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Batteries</h2>
            <p className="text-center text-xl font-bold">
              by -Alessandro Volta{" "}
            </p>
            <div className="text-center font-medium mt-4">
              <p>
                The first battery dates back to 1800, when Italian physicist
                Alessandro Volta wrapped stacked discs of copper and zinc in a
                cloth, submerged it in salty water and discovered that it
                conducted energy. In 1802, Scottish professor William
                Cruickshank invented a variation of Volta's design known as the
                trough battery, which consisted of 50 discs of copper and zinc
                in a wooden box filled with a salt solution to conduct energy.
                However, it was French physicist Gaston Planté who invented the
                first practically used battery, in 1859. Modern variations on
                Planté's rechargeable lead-acid battery are still used in cars
                today.
              </p>
            </div>
            <button className="bg-[#00df9a] text-black  rounded-md font-medium my-6  py-3  px-6 mx-auto w-[200px]">
              Know more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
