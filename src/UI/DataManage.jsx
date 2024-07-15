/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DataManage = () => {
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
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="data-management">
                    {" "}
                    Expert Data Center Management by 7Kings Code
                  </p>
                </div>
                <p>
                  Effective data center management is essential for maintaining
                  the operational efficiency and security of your IT
                  infrastructure. At 7Kings Code, we offer comprehensive data
                  center management solutions designed to keep your systems
                  running smoothly, securely, and efficiently.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Data Center Management?
                </p>
                <p>
                  1. Proven Expertise With years of experience in managing data
                  centers, 7Kings Code brings unparalleled expertise to your
                  business. Our certified professionals ensure your data center
                  is optimized for performance and reliability.
                </p>
                <p>
                  2. Comprehensive Services We provide end-to-end data center
                  management services, including setup, configuration,
                  monitoring, and maintenance. Our holistic approach ensures
                  that every aspect of your data center is running at peak
                  efficiency.
                </p>
                <p>
                  3. 24/7 Monitoring and Support Our dedicated team offers
                  round-the-clock monitoring and support, proactively
                  identifying and resolving potential issues before they impact
                  your operations. This ensures maximum uptime and reliability
                  for your critical systems.
                </p>
                <p>
                  4. Security and Compliance At 7Kings Code, security is a top
                  priority. We implement robust security measures and ensure
                  compliance with industry standards to protect your data center
                  from cyber threats and ensure data integrity.
                </p>
                <p className="font-semibold">
                  Our Data Center Management Services Include:
                </p>
                <p>
                  • Data Center Setup and Configuration We provide expert setup
                  and configuration services to ensure your data center is
                  designed for optimal performance and scalability. Our
                  solutions are tailored to meet your specific business needs.
                </p>
                <p>
                  • 24/7 Monitoring and Maintenance Our team continuously
                  monitors your data center to detect and address issues in
                  real-time. Regular maintenance ensures that your systems are
                  always running at their best.
                </p>
                <p>
                  • Security Management We implement advanced security
                  protocols, including firewalls, intrusion detection systems,
                  and regular security audits, to protect your data center from
                  unauthorized access and cyber threats.
                </p>
                <p>
                  • Performance Optimization We continually assess and optimize
                  your data center's performance, ensuring it operates
                  efficiently and meets your evolving business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataManage;
