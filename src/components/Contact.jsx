import React from "react";
import value from "../assets/img/value.png";
import { MdCall, MdChat } from "react-icons/md";
import { BsFillChatDotsFill, BsFillChatFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl p-6 flex flex-col lg:flex-row items-center justify-center gap-y-8 gap-x-12">
        {/* Left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-5 pt-4 lg:mt-0 w-full lg:w-1/2">
          <span className="text-xl font-bold orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ullam libero necessitatibus dolores odio et corporis minspan.
          </span>
          <div className="flex flex-col justify-center items-start mt-8 gap-4  contact modes">
            {/* first row */}
            <div className=" flex justify-[flex-start] items-center gap-6 row">
              <div className="flex flex-col justify-center items-center w-[160px] p-4 border-2 border-gray-600 rounded-[10px] gap-4 shadow-none transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 shadow-[rgba(136,160,255,0.46)] mode">
                <div className="flex items-center justify-start w-full gap-4">
                  <div className="flex justify-center items-center flex-wrap gap-y-8 icon">
                    <MdCall className="text-blue-600  bg-[#eeef] rounded-[5px] p-0.5" size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText text-[1.1rem] font-semibold">
                      CAll
                    </span>
                    <span className="secondaryText">021 134 578</span>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-y-8 w-full bg-blue-500 font-medium hover:bg-blue-400 text-white scale-[0.8] cursor-pointer transition-all ease-in duration-300 btn">
                  Call Now
                </div>
              </div>
{/* second mod */}
<div className="flex flex-col justify-center items-center w-[160px] p-4 border-2 border-gray-600 gap-4 rounded-[10px] shadow-none transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 shadow-[rgba(136,160,255,0.46)] mode">
                <div className="flex items-center justify-start w-full gap-4">
                  <div className="flex justify-center items-center flex-wrap gap-y-8 icon">
                    <BsFillChatDotsFill className="text-blue-600 bg-[#eeef] rounded-[5px] p-0.5" size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText text-[1.1rem] font-semibold">
                      Chat
                    </span>
                    <span className="secondaryText">021 134 578</span>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-y-8 w-full bg-blue-500 font-medium hover:bg-blue-400 text-white scale-[0.8] cursor-pointer transition-all ease-in duration-300 btn">
                  Call Now
                </div>
              </div>

            </div>
{/* second row  */}
<div className=" flex justify-[flex-start] items-center gap-6 row">
              <div className="flex flex-col justify-center items-center w-[160px] p-4 border-2 border-gray-600 rounded-[10px] gap-4  shadow-none transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 shadow-[rgba(136,160,255,0.46)]  mode">
                <div className="flex items-center justify-start w-full gap-4">
                  <div className="flex justify-center items-center flex-wrap gap-y-8 icon">
                    <MdChat className="text-blue-600 bg-[#eeef] rounded-[5px] p-0.5" size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText text-[1.1rem] font-semibold">
                      Video Chat
                    </span>
                    <span className="secondaryText">021 134 578</span>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-y-8 w-full bg-blue-500 font-medium hover:bg-blue-400 text-white scale-[0.8] cursor-pointer transition-all ease-in duration-300 btn">
                  Video Call now
                </div>
              </div>
{/* second mod */}
<div className="flex flex-col justify-center items-center w-[160px] p-4 border-2  border-gray-600 gap-4 rounded-[10px] shadow-none transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 shadow-[rgba(136,160,255,0.46)] mode">
                <div className="flex items-center justify-start  w-full gap-4">
                  <div className="flex justify-center items-center flex-wrap gap-y-8 icon">
                    <BsFillChatFill className="text-blue-600 bg-[#eeef] rounded-[5px] p-0.5" size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText text-[1.1rem] font-semibold">
                      messege
                    </span>
                    <span className="secondaryText">021 134 578</span>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-y-8 w-full bg-blue-500 font-medium hover:bg-blue-400 text-white scale-[0.8] cursor-pointer transition-all ease-in duration-300 btn">
                  messege now
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-60 sm:w-72 md:w-80 lg:w-[22rem] h-72 sm:h-80 md:h-96 lg:h-[27rem] overflow-hidden border border-gray-600 rounded-t-full">
            <img
              src={value}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
