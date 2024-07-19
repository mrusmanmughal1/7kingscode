/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import custom from "../assets/Services/customdevelop.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const CustomDevelop = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden h-[500px] w-full sm:block lg:block "
                  src={custom}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="custom-develop">
                    {" "}
                    Custom Software Development Services by 7Kings Code
                  </p>
                </div>
                <p>
                  {" "}
                  At 7Kings Code, we specialize in custom software development
                  tailored to meet the unique needs of your business. Whether
                  you're looking to streamline operations, enhance productivity,
                  or innovate with new solutions, our expert team is here to
                  turn your vision into reality.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Custom Software Development?
                </p>
                <p>
                  1. Expertise and Experience With years of experience in custom
                  software development, 7Kings Code delivers innovative
                  solutions that align with your business goals. Our team of
                  skilled developers and engineers ensures high-quality,
                  scalable software solutions.
                </p>
                <p>
                  2. Tailored Solutions We understand that off-the-shelf
                  software may not always meet your specific requirements. Our
                  custom software development services are designed to address
                  your unique challenges and maximize efficiency.
                </p>
                <p>
                  3. Collaborative Approach We work closely with you throughout
                  the development process, from initial concept to final
                  deployment. Our collaborative approach ensures that your
                  software solution meets expectations and delivers tangible
                  results.
                </p>
                <p>
                  4. Technological Expertise 7Kings Code stays updated with the
                  latest technologies and frameworks. Whether it's web
                  applications, mobile apps, enterprise solutions, or
                  cloud-based platforms, we have the expertise to build robust
                  and future-proof software.
                </p>

                <p className="font-semibold">
                  Our Custom Software Development Services Include:
                </p>
                <p>
                  • Requirements Gathering and Analysis We begin by
                  understanding your business needs and objectives. Our team
                  conducts thorough requirements gathering and analysis to
                  create a clear roadmap for development.
                </p>
                <p>
                  • UI/UX Design We prioritize user experience and interface
                  design to ensure intuitive and engaging software solutions.
                  Our UI/UX experts create interfaces that enhance usability and
                  drive user adoption.
                </p>
                <p>
                  • Agile Development We follow agile development methodologies
                  to deliver software in iterative cycles. This approach allows
                  for flexibility, transparency, and quick adaptation to
                  changing requirements.
                </p>
                <p>
                  • Quality Assurance Quality is paramount in our software
                  development process. We conduct rigorous testing and quality
                  assurance to ensure bug-free, reliable, and high-performance
                  software.
                </p>
                <p>
                  • Deployment and Support We provide seamless deployment and
                  ongoing support for your software solution. Our team ensures
                  smooth integration into your existing systems and offers
                  post-launch support to address any issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDevelop;
