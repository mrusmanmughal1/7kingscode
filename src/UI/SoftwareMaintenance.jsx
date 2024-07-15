/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const SoftwareMaintenance = () => {
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
                  <p id="software-maintenance">
                    {" "}
                    Reliable Software Support and Maintenance by 7Kings Code
                  </p>
                </div>
                <p>
                  {" "}
                  In the dynamic world of technology, continuous software
                  support and maintenance are vital for the smooth functioning
                  of your business applications. At 7Kings Code, we offer
                  comprehensive software support and maintenance services that
                  ensure your software remains efficient, secure, and
                  up-to-date.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Software Support and Maintenance?
                </p>
                <p>
                  1. Experienced Professionals Our team of seasoned
                  professionals brings extensive experience in software support
                  and maintenance. We are dedicated to providing timely and
                  effective solutions to keep your software running at its best.
                </p>
                <p>
                  2. Comprehensive Services From troubleshooting and bug fixes
                  to regular updates and performance optimization, our services
                  cover all aspects of software support and maintenance. We
                  tailor our solutions to meet your specific business needs.
                </p>
                <p>
                  3. 24/7 Support We understand that software issues can arise
                  at any time. Our 24/7 support ensures that help is always
                  available when you need it, minimizing downtime and ensuring
                  business continuity
                </p>

                <p>
                  4. Proactive Maintenance Our proactive maintenance approach
                  helps identify and resolve potential issues before they impact
                  your operations. Regular updates and performance tuning keep
                  your software running smoothly and securely.
                </p>
                <p className="font-semibold">
                  Our Software Support and Maintenance Services Include:
                </p>
                <p>
                  • Bug Fixes and Troubleshooting We provide prompt resolution
                  of software bugs and issues, ensuring your applications run
                  smoothly without interruptions.
                </p>
                <p>
                  • Regular Updates and Upgrades Keep your software up-to-date
                  with the latest features and security patches. Our team
                  manages regular updates and upgrades to enhance functionality
                  and security.
                </p>
                <p>
                  • Performance Optimization We continuously monitor and
                  optimize your software’s performance, ensuring it operates
                  efficiently and meets your evolving business needs.
                </p>
                <p>
                  • Security Management Protect your software with our
                  comprehensive security solutions. We implement robust security
                  measures and conduct regular security audits to safeguard your
                  data against threats.
                </p>
                <p>
                  • User Support and Training Our user support and training
                  services help your team get the most out of your software. We
                  provide training sessions and user manuals to ensure effective
                  use of your applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareMaintenance;
