/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import countericon3 from "../assets/Icons/counter-icon3.png";
import countericon2 from "../assets/Icons/counter-icon2.webp";
import countericon1 from "../assets/Icons/counter-icon1.jpg";
import countericon4 from "../assets/Icons/counter-icon4.webp";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="bg-black mt-8  py-14 sm:py-0 md:mt-20 mb-16">
      <div
        className="bg-black min-h-[30vh] flex flex-wrap  md:flex-nowrap py-10 gap-4 items-center 
      justify-center w-11/12 mx-auto md:p-8"
      >
        <div className="flex flex-col items-center justify-center w-full px-28 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="bg-white p-4">
            <img src={countericon3} alt="Icon" className="" />
          </div>
          <div className="mt-4 text-center">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="text-4xl font-bold text-white">
                {counterOn && <CountUp start={0} end={1875} duration={2.5} />}
              </h2>
            </ScrollTrigger>
            <p className="text-white w-40 font-semibold">Projects Completed</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full  px-28 md:w-1/2 xl:w-1/4">
          <div>
            <img src={countericon2} alt="/" className="bg-white w-13 h-13" />
          </div>
          <div className="ml-4">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="text-4xl font-bold text-white">
                {counterOn && <CountUp start={0} end={2500} duration={2.5} />}
              </h2>
            </ScrollTrigger>
            <p className="text-white w-30 font-semibold">IT Specialist</p>
          </div>
        </div>

        <div className="flex flex-col w-full  items-center justify-center md:w-1/2 lg:w-1/2 xl:w-1/4 px-28">
          <div>
            <img src={countericon1} alt="/" className="" />
          </div>
          <div className="ml-4">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="text-4xl font-bold text-white">
                {counterOn && <CountUp start={0} end={1500} duration={2.5} />}
              </h2>
            </ScrollTrigger>
            <p className="text-white w-40 font-semibold">Happy Customers</p>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center  md:w-1/2 lg:w-1/2 xl:w-1/4 px-28">
          <div>
            <img src={countericon4} alt="/" className="bg-white" />
          </div>
          <div className="ml-4">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="text-4xl font-bold text-white">
                {counterOn && <CountUp start={0} end={12500} duration={2.5} />}
              </h2>
            </ScrollTrigger>
            <p className="text-white font-bold">Smart Solution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
