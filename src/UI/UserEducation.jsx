/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const UserEducation = () => {
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
                  <p id="training"> User Training and Education</p>
                </div>
                <p>
                  {" "}
                  Empower your workforce with comprehensive user training and
                  education programs from 7Kings Code. Our customized training
                  solutions enhance user skills, promote adoption of new
                  technologies, and improve overall productivity.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for User Training and Education?
                </p>
                <p>
                  1. Tailored Training Programs We develop tailored training
                  programs to meet your organization's specific needs and
                  objectives. Our programs cover software applications, IT
                  security practices, and best use of technology tools.
                </p>
                <p>
                  2. Expert Trainers Our experienced trainers deliver engaging
                  and informative sessions. We combine theoretical knowledge
                  with practical exercises and real-world scenarios to maximize
                  learning outcomes.
                </p>
                <p>
                  3. Flexible Delivery Options We offer flexible delivery
                  options, including on-site, virtual, and self-paced training.
                  Our training programs accommodate diverse learning styles and
                  preferences, ensuring accessibility for all employees.
                </p>
                <p>
                  4. Continuous Learning We promote continuous learning and
                  skills development. Our training programs evolve with
                  technological advancements and industry trends, keeping your
                  workforce informed and adaptive.
                </p>
                <p className="font-semibold">
                  Our User Training and Education Services Include:
                </p>
                <p>• Software Application Training</p>
                <p>• IT Security Awareness</p>
                <p>• Technology Adoption Workshops</p>
                <p>• Customized Training Materials</p>
                <p>• Certification Preparation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEducation;
