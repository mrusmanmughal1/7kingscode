/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import Infrastructure from "../assets/Services/NetworkManage.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const NetworkManage = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden h-[500px] w-full sm:block lg:block "
                  src={Infrastructure}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary ">
                  <a id="network-management">
                    Network Management Solutions by 7 Kings Code
                  </a>
                </div>
                <p className="text-blue-secondary font-semibold text-xl"></p>
                <p>
                  In today's fast-paced digital world, seamless and secure
                  network management is critical for the success of any
                  business. At 7Kings Code, we provide top-notch network
                  management solutions designed to keep your business connected,
                  secure, and efficient.
                </p>
                <p className="font-semibold text-xl">
                  Why Choose 7 Kings Code for Network Management?
                </p>
                <p>
                  1. Expertise and Experience With years of experience in
                  network management, 7Kings Code brings a wealth of knowledge
                  and expertise to your business. Our team of certified
                  professionals is dedicated to providing customized solutions
                  that meet your specific needs.
                </p>
                <p>
                  2. Comprehensive Services Our network management services
                  cover everything from network design and implementation to
                  ongoing monitoring and support. We ensure your network is
                  optimized for performance, reliability, and security.
                </p>
                <p>
                  3. Advanced Monitoring Tools We utilize the latest in network
                  monitoring tools to keep an eye on your systems 24/7. This
                  proactive approach allows us to identify and address potential
                  issues before they impact your business operations.
                </p>
                <p>
                  4. Security Focused At 7Kings Code, we prioritize the security
                  of your network. Our services include robust firewall
                  protection, intrusion detection systems, and regular security
                  audits to safeguard your data against cyber threats.
                </p>
                <p className="font-semibold">
                  Our Network Management Services Include:
                </p>
                <p>
                  • Network Design and Implementation We design and implement
                  networks that are tailored to your business requirements,
                  ensuring optimal performance and scalability.
                </p>
                <p>
                  {" "}
                  • 24/7 Network Monitoring Our round-the-clock monitoring
                  services detect and resolve issues in real-time, minimizing
                  downtime and ensuring business continuity.{" "}
                </p>
                <p>
                  • Security Management Protect your network with our
                  comprehensive security solutions, including firewalls, VPNs,
                  and intrusion detection systems.
                </p>{" "}
                <p>
                  • Performance Optimization We continually assess and fine-tune
                  your network to enhance speed, reliability, and efficiency,
                  ensuring you get the most out of your infrastructure.{" "}
                </p>
                <p>
                  • Regular Maintenance and Support Our team provides regular
                  maintenance and support to keep your network running smoothly,
                  addressing any issues promptly and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkManage;
