/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const TroubleShooting = () => {
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
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="Troubleshooting">
                    {" "}
                    Software & Hardware Troubleshooting
                  </p>
                </div>
                <p>
                  {" "}
                  Resolve software and hardware issues swiftly with expert
                  troubleshooting services from 7Kings Code. Our dedicated
                  support team offers efficient diagnosis, repair, and
                  resolution of technical problems to minimize disruptions and
                  optimize performance.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Software & Hardware
                  Troubleshooting?
                </p>
                <p>
                  1. Technical Expertise Our technicians possess in-depth
                  knowledge and experience in troubleshooting software and
                  hardware issues. We diagnose problems accurately and implement
                  effective solutions to restore functionality.
                </p>
                <p>
                  2. Comprehensive Support We provide comprehensive support for
                  a wide range of software applications, operating systems, and
                  hardware devices. Our troubleshooting services cover desktops,
                  laptops, servers, and peripherals.
                </p>
                <p>
                  3. Efficient Problem Resolution We prioritize quick problem
                  resolution to minimize downtime and productivity losses. Our
                  systematic approach ensures thorough diagnosis and timely
                  implementation of fixes and updates.
                </p>
                <p>
                  4. Proactive Maintenance We offer proactive maintenance and
                  preventive measures to prevent recurring issues. Our
                  troubleshooting services include performance tuning, software
                  updates, and hardware diagnostics.
                </p>
                <p className="font-semibold">
                  Our Software & Hardware Troubleshooting Services Include:
                </p>
                <p>• Diagnosis and Root Cause Analysis</p>
                <p>• Software Configuration and Repair</p>
                <p>• Hardware Replacement and Upgrades</p>
                <p>• Performance Optimization</p>
                <p>• Troubleshooting Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TroubleShooting;
