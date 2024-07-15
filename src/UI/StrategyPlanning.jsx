/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const StrategyPlanning = () => {
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
                  <p id="planning"> IT Strategy and Planning</p>
                </div>
                <p>
                  Develop a robust IT strategy and align technology initiatives
                  with business objectives using strategic planning services
                  from 7Kings Code. Our comprehensive approach ensures that your
                  IT investments support growth, innovation, and operational
                  excellence.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for IT Strategy and Planning?
                </p>
                <p>
                  1. Strategic Alignment We collaborate closely with your
                  stakeholders to understand business goals and challenges. Our
                  IT strategy aligns technology initiatives with your long-term
                  objectives, fostering agility and competitive advantage.
                </p>
                <p>
                  2. Customized Roadmaps We create customized IT roadmaps that
                  outline clear milestones and priorities. Our strategic
                  planning process includes technology assessments, gap
                  analysis, and actionable recommendations for sustainable
                  growth.
                </p>
                <p>
                  3. Risk Management We identify and mitigate risks associated
                  with technology investments. Our strategic planning considers
                  cybersecurity, compliance, and operational resilience to
                  safeguard your business from potential disruptions.
                </p>
                <p>
                  4. Continuous Improvement We foster a culture of continuous
                  improvement and adaptation. Our IT strategies evolve with
                  market trends, technological advancements, and business
                  requirements to ensure relevance and effectiveness.
                </p>
                <p className="font-semibold">
                  Our IT Strategy and Planning Services Include:
                </p>
                <p>• Business Alignment Workshops</p>
                <p>• Technology Assessment and Analysis</p>
                <p>• Roadmap Development and Execution</p>
                <p>• Risk Identification and Mitigation</p>
                <p>• Stakeholder Engagement and Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategyPlanning;
