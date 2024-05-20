import whatelsebanner from "../assets/images/whatelse.jpg";
import { FaCheck } from "react-icons/fa6";

const WhatElse = () => {
  return (
    <div className="flex bg-[#F3F4F8] ">
      <div className="  p-32  py-14 ">
        <div className="">
          <ol>
            <li className="text-blue-secondary font-bold">What Else Here</li>
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-semibold py-5">
            The Best Tech Solutions for Clients
          </div>
          <div className=" text-slate-400 pb-8">
            7 Kings Code is a provider of IT consulting and software development
            services. We have helped organizations and companies improve
            business performance
          </div>
        </div>
        <div className=" space-y-4">
          <div className="flex gap-4">
            <div className="">
              <FaCheck className=" bg-blue-100 text-4xl text-blue-secondary" />
            </div>
            <div className=" space-y-1 w-96">
              <p className="text-lg font-semibold ">Deliver Perfect Solution</p>
              <p className="text-gray-400">
                Donec suscipit ante ipsum. Donec convallis quam at tortor
                hendrerit ut
              </p>
            </div>
          </div>
          <div className=" flex gap-4">
            <div className="">
              <FaCheck className=" bg-blue-100 text-4xl text-blue-secondary" />
            </div>
            <div className=" space-y-1 w-96">
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
            <div className="">
              <button className="bg-blue-secondary px-8 py-4 text-white ">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12">
        <img src={whatelsebanner} alt="whatelse" />
      </div>
    </div>
  );
};

export default WhatElse;
