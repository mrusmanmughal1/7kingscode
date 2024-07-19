/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import Infrastructure from "../assets/Services/servermanage.jfif";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const ServerManage = () => {
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
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="server-management">
                    {" "}
                    Server Management Services by 7Kings Code
                  </p>
                </div>
                <p>
                  Efficient and reliable server management is essential for
                  maintaining the performance and security of your business
                  operations. At 7Kings Code, we offer comprehensive server
                  management solutions that ensure your servers are always
                  running at peak performance.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Server Management?
                </p>
                <p>
                  1. Expertise and Reliability With extensive experience in
                  server management, 7Kings Code delivers expert solutions
                  tailored to your business needs. Our team of certified
                  professionals is committed to providing reliable and efficient
                  server management services.
                </p>
                <p>
                  2. Proactive Monitoring We use advanced monitoring tools to
                  keep a vigilant eye on your servers 24/7. This proactive
                  approach allows us to detect and address potential issues
                  before they affect your business.
                </p>
                <p>
                  3. Enhanced Security Security is a top priority at 7Kings
                  Code. Our server management services include robust security
                  measures such as regular updates, security patches, and
                  thorough vulnerability assessments to protect your data from
                  threats.
                </p>
                <p>
                  4. Scalable Solutions Whether you are a small business or a
                  large enterprise, our server management solutions are designed
                  to scale with your growth. We provide flexible and customized
                  services that meet your evolving needs.
                </p>
                <p className="font-semibold">
                  Our Server Management Services Include:
                </p>
                <p>
                  • Server Setup and Configuration We handle the complete setup
                  and configuration of your servers, ensuring they are optimized
                  for your specific business requirements.
                </p>
                <p>
                  • 24/7 Server Monitoring Our continuous monitoring services
                  detect and resolve issues in real-time, minimizing downtime
                  and ensuring uninterrupted business operations.
                </p>
                <p>
                  • Security Management Protect your servers with our
                  comprehensive security solutions, including regular updates,
                  security patches, and intrusion detection systems.
                </p>
                <p>
                  • Performance Optimization We continually optimize your server
                  performance, ensuring fast, reliable, and efficient
                  operations. This includes load balancing, resource allocation,
                  and regular performance assessments.
                </p>
                <p>
                  • Backup and Recovery Our backup and recovery solutions ensure
                  your data is always safe and recoverable in case of any
                  unexpected events or disasters.
                </p>
                <p>
                  • Regular Maintenance and Support We provide ongoing
                  maintenance and support, addressing any issues promptly and
                  ensuring your servers remain in optimal condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerManage;
