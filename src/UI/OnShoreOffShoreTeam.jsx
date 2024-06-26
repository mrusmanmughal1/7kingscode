/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const OnShoreOffShoreTeam = () => {
  return (
    <>
      <div className="flex gap-44 mx-auto  ">
        <div className="  mx-auto ">
          <div className="flex  gap-24">
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
                  <p>Off Shore & On Shore Teams</p>
                </div>
                <p>
                  At 7 Kings Code, we offer robust onshore and offshore team
                  solutions designed to maximize efficiency and reduce costs.
                  Whether you need a local presence or wish to leverage global
                  talent, our dedicated teams ensure seamless integration and
                  collaboration, delivering high-quality results every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnShoreOffShoreTeam;
