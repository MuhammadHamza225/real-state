import React from "react";
import right from "../assets/img/right.jpg";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";

function Hero() {
  return (
    <section>
      <div className="pb-2 relative flex justify-center  bg-neutral-900">
        <div className="p-32 pl-7">
          <div className="relative z-10">
            <div className="h-12 w-12 bg-orange-400 rounded-full absolute left-20 -z-10" />
            <h1 className="text-white text-2xl font-bold leading-8">
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="flex-col justify-center flex items-start text-white mt-5 pt-4">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing</span>
          </div>

          <div className="flex bg-white border-2 border-gray-600 rounded justify-between p-1.5 mt-5 ">
            <FaLocationDot className="pr-1 h-8" />
            <input
              className="bg-amber-50 border-none outline-none w-[100%]"
              type="text"
            />
            <button className="bg-amber-600 text-white px-1 py-1 rounded hover:bg-amber-700 transition">
              Search
            </button>
          </div>
          <div>
            <div className="flex justify-evenly mt-5">
            <div className="flex flex-col items-center  text-white">
              <span>
                <CountUp className="text-2xl" start={600} end={900} duration={4} />
                <span className="text-orange-400 text-2xl">+</span>
              </span>
              <span className="text-amber-100 font-light text-xs">Premium products</span>
            </div>
            <div className="flex flex-col items-center  text-white">
              <span>
                <CountUp className="text-2xl" start={600} end={900} duration={4} />
                <span className="text-orange-400 text-2xl">+</span>
              </span>
              <span className="text-amber-100 font-light text-xs"t>Happy customer</span>
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
        </div>
        {/* right part  */}
        <div className="flex justify-center mt-5 pt-4">
          <div className="w-[22rem] h-[27rem] overflow-hidden  border-gray-600 rounded-t-full ">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
