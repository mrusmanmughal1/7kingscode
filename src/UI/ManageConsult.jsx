/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const ManageConsult = () => {
  return (
    <>
      <div className="flex  gap-44 mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
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
                  <p>MANAGEMENT CONSULTING</p>
                </div>
                <p>
                  Navigate complex business challenges with confidence. Our
                  management consultants bring a wealth of experience and
                  strategic insight to help you optimize operations, improve
                  performance, and drive growth. We partner with you to create
                  actionable plans that deliver measurable results
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Management Consulting?
                </p>
                <p>
                  1. Tailored Strategies We understand that every business has
                  unique challenges and opportunities. Our consultants work
                  closely with you to develop customized strategies that align
                  with your specific goals and objectives.
                </p>
                <p>
                  2. Expertise Across Industries Our team of experienced
                  consultants brings deep industry knowledge and expertise
                  across various sectors. We leverage this expertise to provide
                  informed and effective solutions for your{" "}
                </p>
                <p>
                  3. Data-Driven Insights We utilize advanced analytics and
                  data-driven approaches to gain valuable insights into your
                  business operations. This ensures that our recommendations are
                  based on solid evidence and accurate data.
                </p>
                <p>
                  4. Proven Track Record With a proven track record of success,
                  our management consulting services have helped numerous
                  businesses achieve their strategic goals and improve
                  performance. We are committed to delivering results that
                  matter.
                </p>
                <p className="font-semibold">
                  Our Management Consulting Services Include:
                </p>
                <p>
                  • Business Strategy Development: Craft long-term strategies
                  that drive growth, innovation, and competitive advantage.
                </p>
                <p>
                  • Operational Efficiency: Streamline your business processes
                  to enhance productivity and reduce costs.
                </p>
                <p>
                  • Change Management: Navigate organizational changes smoothly
                  with our expert change management services.
                </p>
                <p>
                  • Performance Improvement: Identify and implement
                  opportunities for improvement to boost overall business
                  performance
                </p>
                <p>
                  • Risk Management: Develop robust risk management frameworks
                  to mitigate potential threats and ensure business continuity.
                </p>
                <p>
                  • Financial Advisory: Optimize your financial management and
                  improve your bottom line with our comprehensive financial
                  advisory services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageConsult;
