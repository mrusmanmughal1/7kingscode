/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const UXDesigner = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-20 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden sm:block lg:block "
                  src={UI}
                  alt="UI Design"
                />
                <img
                  className="block w-full sm:hidden lg:hidden"
                  src={a1}
                  alt="AI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold">
                  <p>UI/UX DESIGNING</p>
                </div>
                <p>
                  User experience is at the heart of digital success. Our UI/UX
                  designing services focus on creating intuitive and engaging
                  interfaces that enhance user satisfaction and drive
                  engagement. We blend creativity with functionality to deliver
                  designs that are both beautiful and effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UXDesigner;
