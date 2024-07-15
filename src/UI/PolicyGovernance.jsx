/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const PolicyGovernance = () => {
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
                  <p id="it-policy">IT Policy and Governance</p>
                </div>
                <p>
                  Ensure regulatory compliance and operational efficiency with
                  comprehensive IT policy and governance frameworks from 7Kings
                  Code. We develop tailored policies and governance structures
                  to protect data, manage risks, and optimize IT operations
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for IT Policy and Governance?
                </p>
                <p>
                  1. Policy Development We create customized IT policies that
                  align with industry standards and regulatory requirements. Our
                  policies cover data privacy, security protocols, acceptable
                  use, and IT asset management to promote best practices and
                  compliance.
                </p>
                <p>
                  2. Governance Framework We establish robust governance
                  frameworks to oversee IT activities and investments. Our
                  frameworks include decision-making processes, accountability
                  structures, and performance metrics to ensure alignment with
                  business goals.
                </p>
                <p>
                  3. Compliance and Risk Management We help you navigate
                  regulatory landscapes and mitigate IT-related risks. Our
                  governance strategies include compliance audits, risk
                  assessments, and proactive measures to safeguard against
                  threats and vulnerabilities.
                </p>
                <p>
                  4. Continuous Improvement We promote continuous improvement
                  and adaptation of IT policies and governance practices. Our
                  frameworks evolve with technological advancements and
                  organizational changes to maintain relevance and
                  effectiveness.
                </p>
                <p className="font-semibold">
                  Our IT Policy and Governance Services Include:
                </p>
                <p>• Policy Review and Development</p>
                <p>• Governance Structure Design</p>
                <p>• Compliance Assessments and Audits</p>
                <p>• Risk Management Strategies</p>
                <p>• Training and Awareness Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyGovernance;
