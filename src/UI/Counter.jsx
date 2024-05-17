/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import CountUp from "react-countup";
import { IoSettings } from "react-icons/io5";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const Arr = [
    { count: "347", des: "Projects Completed", icon: <IoSettings /> },
    { count: "456", des: "IT Specialist", icon: <IoSettings /> },
    { count: "32", des: "Happy Clients", icon: <IoSettings /> },
    { count: "423", des: "Smart Solution ", icon: <IoSettings /> },
  ];
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="relative">
      <div
        className="   flex   relative img-banner    py-10 gap-4 items-center 
      justify-center  mx-auto md:p-8"
      >
        <div className="absolute inset-0 bg-blue-secondary opacity-80 "></div>
      <div className="flex w-3/4">
        {Arr.map((val, i) => {
          return (
            <div
              key={i}
              className="flex border-l-2 relative z-20 flex-col items-center gap-4 justify-center w-full px-28 md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div className=" text-5xl text-white  ">{val.icon}</div>
              <div className="mt-4 text-center">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h2 className="text-4xl font-bold text-white py-2">
                    {counterOn && (
                      <CountUp start={0} end={val.count} duration={2.5} />
                    )}
                  </h2>
                </ScrollTrigger>
                <p className="text-white w-40 ">{val.des}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Counter;
