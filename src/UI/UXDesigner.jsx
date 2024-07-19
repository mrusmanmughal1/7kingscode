/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import ui from "../assets/Services/uidesign.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const UXDesigner = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden w-full  sm:block lg:block "
                  src={ui}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p>UI/UX DESIGNING</p>
                </div>
                <p>
                  User experience is at the heart of digital success. Our UI/UX
                  designing services focus on creating intuitive and engaging
                  interfaces that enhance user satisfaction and drive
                  engagement. We blend creativity with functionality to deliver
                  designs that are both beautiful and effective.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for UI/UX Designing?
                </p>
                <p>
                  1. User-Centric Approach Our design philosophy revolves around
                  the end user. We prioritize user needs and behaviors to create
                  designs that are intuitive and enhance the overall user
                  experience.
                </p>
                <p>
                  2. Experienced Design Team Our team of skilled designers
                  brings a wealth of experience and creativity to every project.
                  We stay updated with the latest design trends and best
                  practices to deliver innovative solutions.
                </p>
                <p>
                  3. Collaborative Process We believe in a collaborative design
                  process. We work closely with you to understand your vision
                  and goals, ensuring the final design aligns perfectly with
                  your brand and business objectives.
                </p>
                <p>
                  4. Proven Track Record With a portfolio of successful
                  projects, our UI/UX designing services have helped numerous
                  businesses achieve their digital goals. We are committed to
                  delivering designs that not only look great but also perform
                  exceptionally well.
                </p>
                <p className="font-semibold">
                  Our UI/UX Designing Services Include:
                </p>
                <p>
                  • User Research and Analysis: Conduct thorough user research
                  to understand your target audience and their needs, ensuring
                  our designs are user-focused.
                </p>
                <p>
                  • Wireframing and Prototyping: Create detailed wireframes and
                  interactive prototypes to visualize and test the user flow and
                  functionality before final development.
                </p>
                <p>
                  • Visual Design: Develop visually appealing and
                  brand-consistent interfaces that capture attention and enhance
                  user engagement.
                </p>
                <p>
                  • Usability Testing: Conduct usability tests to gather
                  feedback and make data-driven improvements to the design,
                  ensuring a seamless user experience
                </p>
                <p>
                  • Interaction Design: Design intuitive and engaging
                  interactions that make your digital product easy to use and
                  enjoyable for users
                </p>
                <p>
                  • Responsive Design: Ensure your digital products look and
                  perform flawlessly across all devices with our responsive
                  design services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UXDesigner;
