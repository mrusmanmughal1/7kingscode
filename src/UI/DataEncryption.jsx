/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DataEncryption = () => {
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
                  <p id="data-encryption"> Data Encryption and Protection</p>
                </div>
                <p>
                  {" "}
                  Safeguard your sensitive data with advanced data encryption
                  and protection solutions from 7Kings Code. We offer
                  comprehensive data security services designed to encrypt,
                  secure, and manage data across your organization, ensuring
                  confidentiality and compliance with regulatory requirements.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Data Encryption and Protection?
                </p>
                <p>
                  1. Expert Data Security Our team specializes in data security
                  and encryption technologies. We implement robust encryption
                  methods and security controls to protect your data from
                  unauthorized access and breaches.
                </p>
                <p>
                  2. Comprehensive Data Protection We provide end-to-end data
                  protection solutions, including encryption at rest and in
                  transit, data masking, tokenization, and secure data storage.
                  Our solutions ensure that your sensitive information remains
                  secure across its lifecycle.
                </p>
                <p>
                  3. Regulatory Compliance We help you achieve compliance with
                  data protection regulations such as GDPR, CCPA, and HIPAA. Our
                  data encryption solutions include audit trails and access
                  controls to support regulatory requirements and data privacy
                  laws.
                </p>
                <p>
                  4. Risk Mitigation By encrypting sensitive data, you reduce
                  the risk of data breaches and unauthorized access. Our
                  encryption solutions enhance data integrity and
                  confidentiality, safeguarding your organization's reputation
                  and trust.
                </p>
                <p className="font-semibold">
                  Our Data Encryption and Protection Services Include:
                </p>
                <p>• Data Encryption at Rest and in Transit</p>
                <p>• Secure Data Storage Solutions</p>
                <p>• Tokenization and Data Masking</p>
                <p>• Key Management Services</p>
                <p>• Compliance Audits and Reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataEncryption;
