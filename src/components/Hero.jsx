import React from "react";
import right from "../assets/img/right.jpg";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";

function Hero() {
  return (
    <section>
  <div className="pb-2 relative flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-4 lg:px-16">
    {/* Left Section */}
    <div className="w-full lg:w-1/2 p-8 sm:p-16 md:p-24 lg:p-32 text-center lg:text-left">
      <div className="relative z-10">
        <div className="h-12 w-12 bg-orange-400 rounded-full absolute left-1/2 lg:left-0 -z-10 transform -translate-x-1/2 lg:translate-x-0" />
        <h1 className="text-white text-2xl sm:text-3xl font-bold leading-8">
          Discover <br /> Most Suitable <br /> Property
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start text-white mt-5 pt-4">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing</span>
      </div>

      <div className="flex bg-white border-2 border-gray-600 rounded justify-between p-1.5 mt-5 w-full max-w-md mx-auto lg:mx-0">
        <FaLocationDot className="pr-1 h-8" />
        <input className="bg-amber-50 border-none outline-none flex-grow" type="text" />
        <button className="bg-amber-600 text-white px-2 py-1 rounded hover:bg-amber-700 transition">
          Search
        </button>
      </div>
      
      <div className="flex justify-evenly mt-5 flex-wrap gap-4">
        <div className="flex flex-col items-center text-white">
          <span>
            <CountUp className="text-2xl" start={600} end={900} duration={4} />
            <span className="text-orange-400 text-2xl">+</span>
          </span>
          <span className="text-amber-100 font-light text-xs">Premium products</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <span>
            <CountUp className="text-2xl" start={600} end={900} duration={4} />
            <span className="text-orange-400 text-2xl">+</span>
          </span>
          <span className="text-amber-100 font-light text-xs">Happy customers</span>
        </div>
        <div className="flex flex-col text-white items-center">
          <span>
            <CountUp className="text-2xl" end={25} />
            <span className="text-orange-400 text-2xl">+</span>
          </span>
          <span className="text-amber-100 font-light text-xs">Award winnings</span>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex justify-center mt-5 pt-4 lg:mt-0 w-full lg:w-1/2">
      <div className="w-60 sm:w-72 md:w-80 lg:w-[22rem] h-72 sm:h-80 md:h-96 lg:h-[27rem] overflow-hidden border-gray-600 rounded-t-full">
        <img src={right} alt="Property" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;
