/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const AccessManagement = () => {
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
                  <p id="access-manage"> Identity & Access Management</p>
                </div>
                <p>
                  {" "}
                  Ensure secure and efficient access to your organization
                  resources with identity and access management (IAM) solutions
                  from 7Kings Code. We offer robust IAM services that help you
                  manage user identities, enforce access policies, and protect
                  sensitive data effectively.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Identity & Access Management?
                </p>
                <p>
                  1. Expertise and Experience Our IAM specialists have extensive
                  experience in designing and implementing secure access
                  solutions. We understand the complexities of identity
                  management and offer tailored solutions to meet your unique
                  requirements
                </p>
                <p>
                  2. Comprehensive IAM Solutions We provide end-to-end IAM
                  services, including identity provisioning, authentication,
                  authorization, and single sign-on (SSO). Our solutions are
                  designed to enhance security while simplifying access
                  management across your organization.
                </p>
                <p>
                  3. Scalability and Flexibility Whether you're a small business
                  or a large enterprise, our IAM solutions scale to meet your
                  growing needs. We help you manage identities and access rights
                  efficiently, adapting to changes in your workforce and IT
                  environment.
                </p>
                <p>
                  4. Compliance and Security We help you achieve compliance with
                  regulations such as GDPR, HIPAA, and PCI-DSS. Our IAM
                  solutions enforce access controls and audit trails to ensure
                  data protection and regulatory compliance.
                </p>
                <p className="font-semibold">
                  Our Identity/Access Management Services Include:
                </p>
                <p>• Identity Provisioning and Management</p>
                <p>• Authentication and Authorization Services</p>
                <p>• Single Sign-On (SSO) Integration</p>
                <p>• Access Governance and Compliance</p>
                <p>• Identity Lifecycle Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessManagement;
