/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { MdOutlineTouchApp } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";

const Counter = () => {
  const Arr = [
    { count: "347", des: "Projects Completed", icon: <AiOutlineAim /> },
    { count: "100", des: "IT Specialist", icon: <AiOutlineTeam /> },
    { count: "200", des: "Happy Clients", icon: <AiOutlineSchedule /> },
    { count: "423", des: "Smart Solution ", icon: <MdOutlineTouchApp /> },
  ];
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="relative">
      <div
        className="flex  relative count-banner     gap-4 items-center 
      justify-center  mx-auto  "
      >
        <div className="absolute inset-0 bg-blue-secondary opacity-85 "></div>
        <div className="md:flex w-3/4  grid grid-cols-2   mx-auto  items-center lg:flex-row flex-col">
          {Arr.map((val, i) => {
            return (
              <div
                key={i}
                className="flex   relative text-center z-20 flex-col items-center   justify-center w-full    "
              >
                <div className=" px-10   w-full lg:border-r border-gray-100/40  py-10 md:py-20  flex flex-col items-center justify-center">
                  <div className=" text-6xl text-white flex  justify-center ">
                    {val.icon}
                  </div>
                  <div className="mt-4 text-center">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <h2 className="text-4xl font-bold text-white py-2">
                        {counterOn && (
                          <CountUp start={0} end={val.count} duration={2} />
                        )}
                        {i == 1 ? "+" : ""}
                        {i == 2 ? "+" : ""}
                      </h2>
                    </ScrollTrigger>
                  </div>
                  <p className="text-white w-40   ">{val.des}</p>
                </div>
                <div className="hidden md:block  lg:pb-40"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;
