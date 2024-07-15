/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DesktopManagement = () => {
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
                  <p id="desktop-manage">Desktop & Mobile Management</p>
                </div>
                <p>
                  {" "}
                  Streamline device management and support across your
                  organization with desktop and mobile management solutions from
                  7Kings Code. We offer comprehensive services to optimize
                  device performance, enhance security, and ensure seamless user
                  experiences.
                </p>
                <p className="font-semibold text-xl">
                  {" "}
                  Why Choose 7Kings Code for Desktop & Mobile Management?
                </p>
                <p>
                  1. Unified Management Platform Our unified management platform
                  enables centralized control and monitoring of desktops,
                  laptops, tablets, and mobile devices. We simplify device
                  management while ensuring compliance and security.
                </p>
                <p>
                  2. Efficient Deployment and Configuration We facilitate
                  efficient deployment and configuration of devices,
                  applications, and updates. Our automated processes streamline
                  management tasks, reducing IT workload and enhancing
                  productivity
                </p>
                <p>
                  3. Security and Compliance We prioritize security in device
                  management. Our solutions include endpoint protection,
                  encryption, and compliance enforcement to safeguard corporate
                  data and mitigate risks.
                </p>
                <p>
                  4. User-Centric Approach We focus on delivering a seamless
                  user experience. Our solutions empower users with self-service
                  options, intuitive interfaces, and responsive support for
                  desktop and mobile devices.
                </p>
                <p className="font-semibold">
                  Our Desktop & Mobile Management Services Include:
                </p>
                <p>• Device Provisioning and Deployment</p>
                <p>• Application and Patch Management</p>
                <p>• Security Configuration and Monitoring</p>
                <p>• Mobile Device Management (MDM)</p>
                <p>• Performance Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopManagement;
