/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import lifecycle from "../assets/Services/datalifecycle.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DataLifecycle = () => {
  return (
    <>
      <div className="flex gap-44 mx-auto  ">
        <div className="  mx-auto ">
          <div className="flex  gap-24">
            {/* left  */}

            {/* right  */}
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden w-full h-[550px] sm:block lg:block "
                  src={lifecycle}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="lifecycle"> Data Lifecycle Management</p>
                </div>
                <p>
                  Optimize data management throughout its lifecycle with
                  comprehensive data lifecycle management solutions from 7Kings
                  Code. We offer strategic planning, governance, and execution
                  to ensure data integrity, accessibility, and compliance from
                  creation to archival.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Data Lifecycle Management?
                </p>
                <p>
                  1. Holistic Data Management Approach Our data lifecycle
                  management solutions encompass data governance, storage,
                  usage, and disposition. We develop strategies that align with
                  your business objectives and regulatory requirements, ensuring
                  efficient data handling throughout its lifecycle.
                </p>
                <p>
                  2. Compliance and Regulatory Adherence We help you navigate
                  regulatory complexities and achieve compliance with data
                  protection laws and industry standards. Our solutions include
                  data classification, retention policies, and audit trails to
                  support regulatory audits and data privacy requirements.
                </p>
                <p>
                  3. Efficiency and Cost Optimization We optimize data storage
                  and management practices to reduce costs and improve
                  operational efficiency. Our lifecycle management strategies
                  include data deduplication, archival strategies, and
                  optimization of storage resources.
                </p>
                <p>
                  4. Risk Mitigation and Security We mitigate risks associated
                  with data management through proactive security measures and
                  risk assessments. Our lifecycle management services include
                  data encryption, access controls, and continuous monitoring to
                  protect data integrity and confidentiality.
                </p>
                <p className="font-semibold">
                  Our Data Lifecycle Management Services Include
                </p>
                <p>• Data Governance and Policy Development</p>
                <p>• Data Classification and Retention Management</p>
                <p>• Archiving and Retrieval Solutions</p>
                <p>• Compliance Monitoring and Reporting</p>
                <p>• Data Disposal and Destruction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataLifecycle;
