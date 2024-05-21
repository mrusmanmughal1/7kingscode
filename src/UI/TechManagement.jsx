/* eslint-disable no-unused-vars */
import React from "react";
import techmanage from "../assets/images/tech-manage.jpg";
import { FcDataProtection } from "react-icons/fc";
import { GrOptimize } from "react-icons/gr";

const TechManagement = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-3/4 mx-auto gap-2 p-4 lg:p-0">
      <div className="flex justify-center items-center lg:w-1/2">
        <img src={techmanage} alt="techmanage" className="w-full lg:w-8/12" />
      </div>
      <div className="w-full lg:w-1/2 py-8 lg:py-14 lg:pl-4">
        <div className="">
          <ol>
            <li className="text-blue-secondary font-bold">Tech Management</li>
          </ol>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl lg:text-4xl font-semibold py-5">
            Let’s Build Your Success With 7 Kings Code Solution
          </div>
          <div className="text-gray-400 pb-8">
            Lorem ipsum is simply free text dolor sit am adipi we help you
            ensure everyone.
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="">
              <FcDataProtection className="text-3xl lg:text-4xl text-blue-secondary" />
            </div>
            <div className="space-y-1 w-full lg:w-96">
              <p className="text-lg font-semibold">Data Protection</p>
              <p className="text-gray-400">
                We’ve designed a culture that allows our stewards to assimilate
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="">
              <GrOptimize className="text-3xl lg:text-4xl text-blue-secondary" />
            </div>
            <div className="space-y-1 w-full lg:w-96">
              <div className="font-semibold text-lg">Optimize IT System</div>
              <p className="text-gray-400">
                We’ve designed a culture that allows our stewards to assimilate
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="">
              <button className="bg-blue-secondary px-6 lg:px-8 py-3 lg:py-4 text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechManagement;
