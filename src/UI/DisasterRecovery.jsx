/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DisasterRecovery = () => {
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
                  <p id="Recovery"> Backup and Disaster Recovery</p>
                </div>
                <p>
                  Protect your data and ensure business continuity with reliable
                  backup and disaster recovery solutions from 7Kings Code. We
                  offer comprehensive backup strategies and recovery plans
                  tailored to your organization's needs, keeping your critical
                  information secure and accessible.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Backup and Disaster Recovery?
                </p>
                <p>
                  1. Robust Backup Solutions Our backup solutions include
                  automated backups, incremental backups, and cloud-based backup
                  options. We ensure that your data is securely backed up and
                  available for recovery in the event of data loss or system
                  failure.
                </p>
                <p>
                  2. Disaster Recovery Planning We develop customized disaster
                  recovery plans to minimize downtime and data loss. Our
                  proactive approach includes recovery point objectives (RPOs)
                  and recovery time objectives (RTOs) tailored to your business
                  requirements.
                </p>
                <p>
                  3. Security and Compliance We prioritize data security in
                  backup and recovery processes. Our solutions adhere to
                  industry standards and compliance regulations, ensuring the
                  confidentiality and integrity of your sensitive information.
                </p>
                <p>
                  4. Testing and Validation We conduct regular testing and
                  validation of backup and recovery processes to verify
                  reliability and effectiveness. Our proactive testing ensures
                  readiness to recover data and restore operations swiftly.
                </p>
                <p className="font-semibold">
                  Our Backup and Disaster Recovery Services Include:
                </p>
                <p>• Data Backup Solutions</p>
                <p>• Disaster Recovery Planning and Implementation</p>
                <p>• Cloud Backup and Recovery</p>
                <p>• Backup Monitoring and Management</p>
                <p>• Recovery Testing and Validation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisasterRecovery;
