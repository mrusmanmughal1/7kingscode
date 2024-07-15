/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const RiskManagement = () => {
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
                  <p id="risk-management"> Compliance & Risk Management</p>
                </div>
                <p>
                  {" "}
                  Ensure regulatory compliance and mitigate risks effectively
                  with compliance and risk management solutions from 7Kings
                  Code. We specialize in helping businesses navigate complex
                  regulatory landscapes and implement robust risk management
                  strategies tailored to their industry and operational needs.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Compliance/Risk Management?
                </p>
                <p>
                  1. Expert Guidance Our team of compliance and risk management
                  experts provides specialized knowledge and guidance. We help
                  you understand regulatory requirements and develop tailored
                  strategies to achieve compliance.
                </p>
                <p>
                  2. Comprehensive Approach We offer a comprehensive range of
                  services, including risk assessments, compliance audits,
                  policy development, and regulatory gap analysis. Our solutions
                  are designed to address specific compliance challenges and
                  minimize organizational risks.
                </p>
                <p>
                  3. Industry-Specific Solutions We have experience working
                  across various industries, including healthcare, finance, and
                  IT. Our industry-specific knowledge allows us to offer
                  targeted compliance and risk management solutions that meet
                  sector-specific regulations and standards.
                </p>
                <p>
                  4. Continuous Monitoring and Improvement We provide ongoing
                  monitoring and evaluation of compliance efforts. Our proactive
                  approach ensures that your compliance programs are up-to-date
                  and effective in mitigating risks and maintaining regulatory
                  adherence.
                </p>
                <p className="font-semibold">
                  Our Compliance & Risk Management Services Include:
                </p>
                <p>• Regulatory Compliance Assessments</p>
                <p>• Risk Identification and Assessment</p>
                <p>• Compliance Program Development</p>
                <p>• Regulatory Gap Analysis</p>
                <p>• Compliance Monitoring and Reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagement;
