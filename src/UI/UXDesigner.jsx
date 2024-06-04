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
      <div>
        <MainBanner
          text="UI/UX Designing"
          title="7 Kings Code - IT Solutions & Technology"
        />
      </div>
      <div className="w-[80%] lg:w-[70%] mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* left  */}
          <div className="bg-[#F6F7F9] p-8 w-full lg:w-[30%] space-y-10">
            <div className="font-semibold text-xl">Services</div>

            <p className="flex justify-between items-center">
              UI/UX Designing
              <AiOutlineArrowRight />
            </p>
            <p className="flex justify-between items-center">
              Cloud Service
              <AiOutlineArrowRight />
            </p>
            <p className="flex justify-between items-center">
              IT Management
              <AiOutlineArrowRight />
            </p>
            <p className="flex justify-between items-center">
              Data Visualization
              <AiOutlineArrowRight />
            </p>
            <p className="flex justify-between items-center">
              Security System
              <AiOutlineArrowRight />
            </p>
            <p className="flex justify-between items-center">
              Web Development
              <AiOutlineArrowRight />
            </p>
          </div>
          {/* right  */}
          <div className="w-full lg:w-[70%]">
            <img
              className="hidden sm:block lg:block"
              src={UI}
              alt="UI Design"
            />
            <img
              className="block w-full sm:hidden lg:hidden"
              src={a1}
              alt="AI Design"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] lg:w-[70%] mx-auto py-4">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* left  */}
          <div className="bg-blue-secondary text-white p-8 w-full lg:w-[30%] space-y-10">
            <div className="font-semibold text-xl">
              <p>Have Any Problem? Please Contact</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-950 p-2 rounded-full">
                <FiPhone />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-300">Call Us</p>
                <p>+99 345 234 5678</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-950 p-2 rounded-full">
                <IoMail />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-300">Write to us</p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-950 p-2 rounded-full">
                <IoLocation />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-300">Our Address</p>
                <p>1401 Coral Springs, United States</p>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="w-full lg:w-[70%] space-y-4 pb-16">
            <div className="text-2xl font-semibold">
              <p>UI/UX Designing</p>
            </div>
            <div className="text-justify">
              <p>
                Lorem ipsum is simply free text used by copytyping refreshing.
                Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UXDesigner;
