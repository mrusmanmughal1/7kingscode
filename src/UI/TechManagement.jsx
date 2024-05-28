/* eslint-disable no-unused-vars */
import React from "react";
import techmanage from "../assets/images/tech-manage.jpg";
import { CiLock } from "react-icons/ci";
import { BsCapslock } from "react-icons/bs";
import DMOre from "./DMOre";
const TechManagement = () => {
  return (
    <div className=" mx-auto  py-10">
      <div className="flex flex-col lg:flex-row 2xl:w-3/4   w-11/12  sm:w-3/4 lg:w-11/12  mx-auto gap-2 sm:p-4 lg:p-0">
        <div className="flex   justify-center items-center lg:w-1/2">
          <img
            src={techmanage}
            alt="techmanage"
            className="w-full lg:w-8/12 relative lg:top-[-10rem]"
          />
        </div>
        <div className="w-full lg:w-1/2 py-8 lg:py-14 lg:pl-4">
          <div className="">
            <ol>
              <li className="text-blue-secondary font-bold">Tech Management</li>
            </ol>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="text-2xl lg:text-4xl font-semibold py-1">
              Let’s Build Your Success With 7 Kings Code Solution
            </div>
            <div className="text-blue-secondary  text-sm font-semibold pb-8">
              At 7 Kings Code, we specialize in transforming businesses with
              comprehensive IT consulting and management services to ensure
              technology drives success.
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-center border-b pb-4">
              <div className="">
                <CiLock className="text-3xl lg:text-4xl text-blue-secondary" />
              </div>
              <div className="space-y-1 w-full ">
                <p className="text-lg font-semibold">Data Protection</p>
                <p className="text-gray-400 text-sm">
                  We’ve designed a culture that prioritizes your data security.
                  Our cybersecurity services, including risk assessments,
                  vulnerability management, and incident response, ensure that
                  your data is protected and your business is compliant with
                  industry standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="">
                <BsCapslock className="text-3xl lg:text-4xl text-blue-secondary" />
              </div>
              <div className="space-y-1 w-full ">
                <div className="font-semibold text-lg">Optimize IT System</div>
                <p className="text-gray-400 text-sm">
                  Enhance your IT systems with our expert optimization services.
                  From business process analysis and technology roadmap
                  development to managed IT services and network management, we
                  streamline your operations for maximum efficiency and
                  productivity.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <DMOre />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechManagement;
