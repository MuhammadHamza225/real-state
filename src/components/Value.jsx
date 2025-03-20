import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import value from "../assets/img/value.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion.jsx";

const Value = () => {
  return (
    <section>
      <div className="flex w-full p-6 flex-wrap">
        {/* [****left side****] */}
        <div className="flex justify-center mt-5 pt-4 lg:mt-0 w-full lg:w-1/2">
          <div className="w-60 sm:w-72 md:w-80 lg:w-[22rem] h-72 sm:h-80 md:h-96 lg:h-[27rem] overflow-hidden border-gray-600 rounded-t-full">
            <img
              src={value}
              alt="Our Value"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* [****right side****] */}
        <div className="flex flex-col pt-10 lg:pt-14 mt-6 gap-4 w-full lg:w-1/2 max-w-2xl">
          <div className="text-orange-400 text-sm md:text-base">Our value</div>
          <div className="primaryText text-2xl md:text-3xl font-bold">
            Value that give to you
          </div>
          <div className="secondaryText text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, cupiditate!
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, unde!
          </div>
          <Accordion
            className="border-0 w-full"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  key={i}
                  className={` border-[0.8px] rounded-[8px] overflow-hidden mb-4 border-[rgba(136,160,255,0.46)] `}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className="flex items-center gap-4 w-full p-4 cursor-pointer primaryText font-medium text-base md:text-lg min-w-0"
                      uuid={i}
                    >
                      {/* SVG + heading + arrow all in one row */}
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="flex items-center justify-center p-2.5 rounded-[5px] bg-[#eeef] flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="primaryText truncate">
                          {item.heading}
                        </span>
                      </div>

                      <MdOutlineArrowDropDown
                        className="rounded-[5px] bg-[#eeef] flex-shrink-0"
                        size={24}
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-4">
                    <p className="secondaryText text-sm md:text-base">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
