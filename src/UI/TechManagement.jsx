/* eslint-disable no-unused-vars */
import React from "react";
import techmanage from "../assets/images/tech-manage.jpg";
import { CiLock } from "react-icons/ci";
import { BsCapslock } from "react-icons/bs";
import { AiOutlinePython } from "react-icons/ai";
import DMOre from "./DMOre";
const TechManagement = () => {
  return (
    <div className=" mx-auto  pt-10">
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
            <div className="text-2xl lg:text-4xl mb-4 font-semibold py-1">
              Let’s Build Your Success Today
            </div>
            {/* <div className="text-blue-secondary  text-sm font-semibold pb-8">
              At 7 Kings Code, we specialize in transforming businesses with
              comprehensive IT consulting and management services to ensure
              technology drives success.
            </div> */}
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-center border-b pb-4">
              <div className="">
                <CiLock className="text-3xl lg:text-4xl text-blue-secondary" />
              </div>
              <div className="space-y-1 w-full ">
                <p className="text-lg font-semibold capitalize ">
                  BUSINESS SOLUTION
                </p>
                <p className="text-gray-400 text-sm">
                  7 Kings Code delivers customized solutions to tackle your
                  unique business challenges, leveraging cutting-edge technology
                  and industry expertise to drive growth and efficiency.
<<<<<<< HEAD
=======
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-b pb-4 items-center">
              <div className="">
                <BsCapslock className="text-3xl lg:text-4xl text-blue-secondary" />
              </div>
              <div className="space-y-1 w-full ">
                <div className="font-semibold text-lg capitalize">
                  PRODUCTION SUPPORT
                </div>
                <p className="text-gray-400 text-sm">
                  Count on 7 Kings Code for seamless production support,
                  ensuring uninterrupted operations with proactive monitoring,
                  rapid issue resolution, and round-the-clock assistance
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="">
                <AiOutlinePython className="text-3xl lg:text-4xl text-blue-secondary" />
              </div>
              <div className="space-y-1 w-full ">
<<<<<<< HEAD
                <div className="font-semibold text-lg capitalize">
                  PRODUCTION SUPPORT
                </div>
                <p className="text-gray-400 text-sm">
                  Count on 7 Kings Code for seamless production support,
                  ensuring uninterrupted operations with proactive monitoring,
                  rapid issue resolution, and round-the-clock assistance
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="">
                <BsCapslock className="text-3xl lg:text-4xl text-blue-secondary" />
              </div>
              <div className="space-y-1 w-full ">
                <div className="font-semibold text-lg uppercase">
                  Resource Management
                </div>
                <p className="text-gray-400 text-sm">
                  Optimize your resources with 7 Kings Code's tailored
                  solutions, maximizing productivity and minimizing costs
                  through strategic resource allocation and efficient management
                  practices.
                </p>
              </div>
            </div>
=======
                <div className="font-semibold text-lg uppercase">
                  Resource Management
                </div>
                <p className="text-gray-400 text-sm">
                  Optimize your resources with 7 Kings Code's tailored
                  solutions, maximizing productivity and minimizing costs
                  through strategic resource allocation and efficient management
                  practices.
                </p>
              </div>
            </div>
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechManagement;
