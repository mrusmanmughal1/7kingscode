/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DataSecurity = () => {
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
                  <p id="data-security"> Data Security</p>
                </div>
                <p>
                  Protect your sensitive data with robust data security
                  solutions from 7Kings Code. We offer comprehensive security
                  measures and technologies to safeguard data integrity,
                  confidentiality, and availability across your organization.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Data Security?
                </p>
                <p>
                  1. Comprehensive Security Framework Our data security
                  solutions encompass encryption, access controls, threat
                  detection, and incident response. We implement a layered
                  security approach to defend against evolving cyber threats and
                  unauthorized access.
                </p>
                <p>
                  2. Regulatory Compliance We help you achieve compliance with
                  data protection regulations such as GDPR, HIPAA, and PCI-DSS.
                  Our solutions include audit trails, data governance
                  frameworks, and security assessments to ensure regulatory
                  adherence.
                </p>
                <p>
                  3. Risk Management We assess and mitigate risks to your data
                  through proactive security measures and continuous monitoring.
                  Our security experts identify vulnerabilities, implement
                  controls, and provide recommendations for risk reduction.
                </p>
                <p>
                  4. Continuous Monitoring and Threat Intelligence We monitor
                  data environments in real-time for suspicious activities and
                  potential threats. Our proactive monitoring and threat
                  intelligence capabilities enable swift detection and response
                  to security incidents.
                </p>
                <p className="font-semibold">
                  Our Data Security Solutions Include:
                </p>
                <p>• Data Encryption and Tokenization</p>
                <p>• Access Control and Identity Management</p>
                <p>• Threat Detection and Incident Response</p>
                <p>• Compliance Audits and Assessments</p>
                <p>• Security Awareness Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSecurity;
