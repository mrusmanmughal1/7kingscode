/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import remote from "../assets/Services/remotesupport.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const RemoteSupport = () => {
  return (
    <>
      <div className="flex gap-44 mx-auto  ">
        <div className="  mx-auto ">
          <div className="flex  gap-24">
            {/* left  */}

            {/* right  */}
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden w-full h-[550px] sm:block lg:block "
                  src={remote}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="remote"> Remote Support</p>
                </div>
                <p>
                  {" "}
                  Enable seamless remote work environments with reliable remote
                  support services from 7Kings Code. Our remote support
                  solutions empower your workforce with quick access to
                  technical assistance, troubleshooting, and IT resources from
                  anywhere.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Remote Support?
                </p>
                <p>
                  1. Accessibility and Convenience Our remote support services
                  enable instant access to IT assistance without the need for
                  on-site visits. We support remote workers, traveling
                  employees, and distributed teams effectively.
                </p>
                <p>
                  2. Fast Issue Resolution We prioritize quick issue resolution
                  and minimal downtime. Our remote support specialists diagnose
                  and troubleshoot IT problems remotely, ensuring rapid
                  resolution and continuity of operations.
                </p>
                <p>
                  3. Secure Remote Access We implement secure remote access
                  technologies to protect data and maintain confidentiality. Our
                  solutions comply with industry standards and best practices
                  for remote support security.
                </p>
                <p>
                  4. Proactive Monitoring and Maintenance We provide proactive
                  monitoring and maintenance to prevent issues before they
                  escalate. Our remote support services include proactive health
                  checks, updates, and performance optimization.
                </p>
                <p className="font-semibold">
                  Our Remote Support Services Include:
                </p>
                <p>• Remote Troubleshooting and Diagnostics</p>
                <p>• Software Installation and Updates</p>
                <p>• Remote Desktop Control and Assistance</p>
                <p>• Network Connectivity Support</p>
                <p>• Performance Monitoring and Reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoteSupport;
