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
            <div className="bg-[#F6F7F9] shadow-md  p-4  w-full mx-auto">
              <div className="font-semibold text-xl pl-4">Services</div>

              <NavLink
                to="UXDesigner"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                UI/UX Designing
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="OnShoreOffShoreTeam"
                className="flex justify-between  capitalize items-center  hover:bg-black hover:text-white p-4 "
              >
                Off Shore & On Shore Teams
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="TalentAquisition"
                className="flex justify-between  items-center hover:bg-black hover:text-white p-4"
              >
                Talent Acquisition and Visa Sponsorship
                <AiOutlineArrowRight className="text-2xl" />
              </NavLink>
              <NavLink
                to="ManageConsult"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Management Consulting
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="DataAnalysis"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Data Analysis
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="WebDevelopment"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Web Development
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="DigitalMarketing"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Digital Marketing
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="BusinessIntelligence"
                className="flex justify-between items-center hover:bg-black hover:text-white p-4"
              >
                Business Intelligence
                <AiOutlineArrowRight className="text-lg" />
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
                  <p>(+1) 954-272-8515</p>
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
                  <p>
                    1401 N University Dr suite 503, Coral Springs, FL 33071,
                    United State
                  </p>
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
