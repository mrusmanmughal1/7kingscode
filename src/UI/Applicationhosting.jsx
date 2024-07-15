/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const Applicationhosting = () => {
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
                  <p id="hosting">
                    Reliable Application Hosting Services by 7Kings Code
                  </p>
                </div>
                <p>
                  {" "}
                  In today’s digital era, robust and secure application hosting
                  is crucial for ensuring seamless performance and availability
                  of your business applications. At 7Kings Code, we provide
                  top-tier application hosting solutions designed to meet your
                  unique business needs, ensuring reliability, scalability, and
                  security.
                </p>
                <p className="font-semibold text-xl">
                  Why Choose 7Kings Code for Application Hosting?
                </p>
                <p>
                  1. Expertise and Experience With a team of experienced IT
                  professionals, 7Kings Code delivers exceptional application
                  hosting services. Our expertise ensures that your applications
                  are hosted in a secure, reliable, and optimized environment.
                </p>
                <p>
                  2. Comprehensive Hosting Solutions We offer a full range of
                  application hosting services, from initial setup and
                  configuration to ongoing monitoring and maintenance. Our
                  solutions are tailored to meet your specific requirements,
                  ensuring optimal performance.
                </p>
                <p>
                  3. High Availability and Uptime Our hosting solutions are
                  designed to provide high availability and maximum uptime. We
                  use advanced technologies and infrastructure to ensure that
                  your applications are always accessible and running smoothly.
                </p>
                <p>
                  4. Security Focused Security is a top priority at 7Kings Code.
                  Our hosting solutions include robust security measures such as
                  firewalls, encryption, and regular security audits to protect
                  your applications from threats.
                </p>
                <p className="font-semibold">
                  Our Application Hosting Services Include:
                </p>
                <p>
                  • Application Hosting Setup and Configuration We provide
                  expert setup and configuration services to ensure your
                  applications are hosted in an environment that maximizes
                  performance and reliability.
                </p>
                <p>
                  • 24/7 Monitoring and Support Our round-the-clock monitoring
                  and support services ensure that your applications are always
                  running at their best. We proactively address any issues to
                  minimize downtime and disruptions.
                </p>
                <p>
                  • Scalability and Flexibility Easily scale your hosting
                  resources to meet changing business demands. Our flexible
                  hosting solutions allow you to adjust resources based on your
                  application’s needs.
                </p>
                <p>
                  • Security Management Protect your applications with our
                  comprehensive security solutions. We implement firewalls, data
                  encryption, and regular security updates to safeguard your
                  applications and data.
                </p>
                <p>
                  • Disaster Recovery and Backup Ensure business continuity with
                  our disaster recovery and backup solutions. We provide
                  reliable data backup and quick recovery options to protect
                  your applications from data loss and downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicationhosting;
