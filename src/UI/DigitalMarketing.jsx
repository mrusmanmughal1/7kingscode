/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DigitalMarketing = () => {
  return (
    <>
      <div className="flex  gap-44 mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            {/* left  */}

            {/* right  */}
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
                  <p>Digital Marketing</p>
                </div>
                <p>
                  In today’s digital age, a strong online presence is crucial.
                  Our digital marketing services are designed to boost your
                  brand visibility and drive traffic to your site. We craft
                  strategies that deliver tangible results and maximize ROI from
                  SEO and content marketing to social media and PPC campaigns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
