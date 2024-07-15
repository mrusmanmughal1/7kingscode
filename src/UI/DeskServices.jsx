/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DeskServices = () => {
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
                  <p id="help-desk"> Help Desk Services</p>
                </div>
                <p>
                  {" "}
                  Enhance productivity and support your workforce with efficient
                  help desk services from 7Kings Code. Our comprehensive help
                  desk solutions provide timely technical support,
                  troubleshooting, and issue resolution to keep your business
                  running smoothly.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Help Desk Services?
                </p>
                <p>
                  1. Responsive Support Our help desk team offers responsive
                  support to address technical issues promptly. We provide a
                  centralized point of contact for your employees, ensuring
                  quick resolution of IT-related problems.
                </p>
                <p>
                  2. Expertise and Experience With extensive experience in help
                  desk management, 7Kings Code delivers reliable support
                  services. Our knowledgeable technicians are trained to handle
                  a wide range of technical issues effectively.
                </p>
                <p>
                  3. Customized Solutions We understand the unique needs of your
                  business. Our help desk services are tailored to align with
                  your organization's workflows, priorities, and IT environment,
                  ensuring personalized support.
                </p>
                <p>
                  4. Continuous Improvement We continuously monitor and optimize
                  our help desk services to enhance efficiency and user
                  satisfaction. Our proactive approach minimizes downtime and
                  improves overall IT performance.
                </p>
                <p className="font-semibold">Our Help Desk Services Include:</p>
                <p>• Incident and Problem Management</p>
                <p>• Technical Support and Troubleshooting</p>
                <p>• Software Installation and Configuration</p>
                <p>• User Account Management</p>
                <p>• Help Desk Reporting and Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskServices;
