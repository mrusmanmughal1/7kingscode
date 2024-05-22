import whatelsebanner from "../assets/images/whatelse.jpg";
import { FaCheck } from "react-icons/fa6";
import DMOre from "./DMOre";
const WhatElse = () => {
  return (
    <div className="bg-[#F3F4F8]   flex w-full   justify-center">
      <div className="flex w-11/12 md:w-3/4 lg:flex-row flex-col lg:gap-32 gap-10  items-center ">
        <div className=" mx-auto sm:order-1  md:order-none  py-14 ">
          <div className="w-full">
            <ol>
              <li className="text-blue-secondary font-bold">What Else Here</li>
            </ol>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="text-4xl font-semibold py-5">
              The Best Tech Solutions for Clients
            </div>
            <div className=" text-slate-400 pb-8">
              7 Kings Code is a provider of IT consulting and software
              development services. We have helped organizations and companies
              improve business performance
            </div>
          </div>
          <div className=" w-full space-y-4">
            <div className="flex gap-4">
              <div className="  ">
                <p className="bg-blue-100 p-4">
                <FaCheck className="  bg-blue-100  text-3xl text-blue-secondary" />
                </p>
              </div>
              <div className=" space-y-1 md:w-96">
                <p className="text-lg font-semibold ">
                  Deliver Perfect Solution
                </p>
                <p className="text-gray-400">
                  Donec suscipit ante ipsum. Donec convallis quam at tortor
                  hendrerit ut
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="">
              <p className="bg-blue-100 p-4">
                <FaCheck className=" bg-blue-100  text-3xl text-blue-secondary" />
                </p>
              </div>
              <div className="space-y-1 md:w-96">
                <div className="font-semibold text-lg  ">
                  Work With Global Brands
                </div>
                <p className="text-gray-400">
                  Donec suscipit ante ipsum. Donec convallis quam at tortor
                  hendrerit ut
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <DMOre/>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <img src={whatelsebanner} className="" alt="whatelse" />
        </div>
      </div>
    </div>
  );
};
export default WhatElse;