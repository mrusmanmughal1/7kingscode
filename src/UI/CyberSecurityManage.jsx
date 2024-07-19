/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import Security from "../assets/Services/cybersecurity.jfif";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const CyberSecurityManage = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden w-full h-[500px] sm:block lg:block "
                  src={Security}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="cybersecurity">Cyber Security Management</p>
                </div>
                <p>
                  {" "}
                  Protect your organization from cyber threats with robust
                  cybersecurity management solutions from 7Kings Code. We offer
                  comprehensive strategies and services to safeguard your data,
                  systems, and networks against evolving threats. Our expert
                  team implements proactive measures to ensure your
                  cybersecurity posture remains strong, allowing you to focus on
                  business growth with peace of mind.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Cybersecurity Management?
                </p>
                <p>
                  1. Expertise and Experience With years of experience in
                  cybersecurity management, 7Kings Code provides expert guidance
                  and support. Our team stays updated with the latest threats
                  and trends to deliver effective protection strategies tailored
                  to your business needs.
                </p>
                <p>
                  2. Comprehensive Solutions We offer a full spectrum of
                  cybersecurity services, including risk assessment,
                  vulnerability management, security audits, and policy
                  development. Our holistic approach ensures all aspects of your
                  cybersecurity are covered.
                </p>
                <p>
                  3. Proactive Defense Our proactive defense strategies include
                  continuous monitoring, threat detection, and incident response
                  planning. We identify and mitigate risks before they impact
                  your business operations, minimizing potential damages.
                </p>
                <p>
                  4. Compliance and Best Practices We help your organization
                  achieve compliance with industry regulations and best
                  practices. Our solutions align with frameworks such as GDPR,
                  HIPAA, and PCI-DSS, ensuring adherence to legal requirements
                  and data protection standards.
                </p>
                <p className="font-semibold">
                  Our Cybersecurity Management Services Include:
                </p>
                <p>• Risk Assessment and Mitigation</p>
                <p>• Vulnerability Management</p>
                <p>• Security Policy Development</p>
                <p>• Security Awareness Training</p>
                <p>• Cybersecurity Incident Response Planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSecurityManage;
