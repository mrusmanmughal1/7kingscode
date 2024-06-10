/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <>
      <MainBanner
        text="About Us"
        title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
      />
      <div className="flex-col  flex  w-[100%] lg:flex-row lg:w-[80%]  mx-auto  gap-24 py-32">
        <div className="w-[90%] lg:w-[30%] mx-auto  ">
          <div className="flex flex-col lg:flex-col gap-20">
            {/* left  */}
            <div className="bg-[#F6F7F9] shadow-md  p-8  w-full mx-auto  space-y-4">
              <div className="font-semibold text-xl">Services</div>

              <NavLink
                to="UXDesigner"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                UI/UX Designing
                <AiOutlineArrowRight />
              </NavLink>
              <NavLink
                to="CloudService"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4 "
              >
                Cloud Service
                <AiOutlineArrowRight />
              </NavLink>
              <NavLink
                to="ITManagement"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                IT Management
                <AiOutlineArrowRight />
              </NavLink>
              <NavLink
                to="DataVisualization"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Data Visualization
                <AiOutlineArrowRight />
              </NavLink>
              <NavLink
                to="SecuritySystem"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Security System
                <AiOutlineArrowRight />
              </NavLink>
              <NavLink
                to="WebDevelopment"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Web Development
                <AiOutlineArrowRight />
              </NavLink>
            </div>
            {/* right  */}
            <div className="bg-blue-secondary text-white p-8 w-full  space-y-10">
              <div className="font-semibold text-xl">
                <p>Have Any Problem? Please Contact</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-950 text-3xl p-3  rounded-full">
                  <FiPhone />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300">Call Us</p>
                  <p>+99 345 234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-950 text-3xl p-3  rounded-full">
                  <IoMail />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300">Write to us</p>
                  <p>info@7kingscode.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-950 text-3xl p-3 rounded-full">
                  <IoLocation />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300">Our Address</p>
                  <p>1401 Coral Springs, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
