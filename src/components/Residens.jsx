import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../utils/slider.json";
import "swiper/css";
import "swiper/css/free-mode";
import { sliderSetting } from "../utils/common";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const Residens = () => {
  const swiperRef = useRef(null);

  return (
    <section className="flex justify-center">
      <div className="p-6 w-full max-w-5xl relative">
        {/* Controls max width */}
        <div className="flex-col justify-center items-start mb-8">
          <div className="orangeText">Best Choices</div>
          <div className="primaryText">Popular Residencies</div>
        </div>

        {/* Navigation buttons positioned over the last image */}
        <div className="absolute top-14 right-10 transform -translate-y-1/2 z-10 flex gap-2">
          <button
            className="p-2 bg-white rounded-full shadow-lg"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="p-2 bg-white rounded-full shadow-lg"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Swiper component */}
        <Swiper
          {...sliderSetting}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full max-w-max"
        >
          {data.map((card, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div
                className="flex-col gap-x-0.5 p-4
                hover:transition-transform ease-out duration-300 hover:scale-110 cursor-pointer 
                hover:bg-gradient-to-b from-transparent to-[rgba(136,160,255,0.46)] 
                hover:scale-[1.025]"
              >
                <img src={card.image} alt="" />
                <span className="secondaryText flex">
                  <span className="text-orange-400 text-[1.2rem]">$</span>
                  <span className="text-[1.2rem]">{card.price}</span>
                </span>
                <div className="flex-col">
                  <div className="primaryText">{card.name}</div>
                  <div className="secondaryText">{card.detail}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residens;
