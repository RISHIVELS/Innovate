import React from "react";
import { ReactTyped } from "react-typed";
import { Typed } from "react-typed";

const Hero = () => {
  const quotes = [
    '"The important thing is to never stop questioning." - Albert Einstein',
    '"Science is the poetry of reality." - Richard Dawkins',
    '"Somewhere, something incredible is waiting to be known." - Carl Sagan',
    '"The universe is under no obligation to make sense to you." - Neil deGrasse Tyson',
    '"Science and everyday life cannot and should not be separated." - Rosalind Franklin',
  ];
  return (
    <>
      <div className="text-white" id="Home">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center">
          <p className="text-[#00df9a] font-bold p-2 text-center">
            "Unveil the mysteries of the universe, one discovery at a time."
          </p>
          <h1 className="md:text-4xl text-center mt-6 sm:text-6xl text-4xl font-bold">
            Discover the scientific breakthroughs shaping our future.
          </h1>
          <div className="flex justify-center items-center py-4 text-center">
            <ReactTyped
              className="md:text-4xl sm:text-4xl text-xl font-bold pt-2 md:pl-4 pl-2"
              strings={quotes}
              typeSpeed={40}
              backSpeed={10}
              loop
            ></ReactTyped>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 text-center mx-auto">
            Throughout history, groundbreaking discoveries have transformed our
            understanding of reality. From the laws of physics to the
            intricacies of biology, each revelation builds upon the last, paving
            the way for innovations that shape our future.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto py-3 text-black hover:bg-purple-300 hover:text-blacktransition-all duration-500 ease-in-out">
            Know more
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
