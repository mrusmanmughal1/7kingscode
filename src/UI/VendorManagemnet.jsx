/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const VendorManagemnet = () => {
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
                  <p id="vendor">Vendor Management</p>
                </div>
                <p>
                  {" "}
                  Optimize vendor relationships and enhance procurement
                  processes with vendor management solutions from 7Kings Code.
                  We streamline vendor selection, negotiation, and performance
                  management to maximize value and minimize risks.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Vendor Management?
                </p>
                <p>
                  1. Vendor Selection and Assessment We conduct thorough
                  assessments to identify and onboard vendors that align with
                  your business requirements and standards. Our selection
                  criteria include performance history, capabilities, and
                  compliance with contractual obligations.
                </p>
                <p>
                  2. Contract Negotiation We negotiate favorable terms and
                  conditions to achieve cost savings and mitigate risks. Our
                  vendor management strategies include contract reviews, SLA
                  agreements, and ongoing performance evaluations.
                </p>
                <p>
                  3. Performance Monitoring We monitor vendor performance
                  against established KPIs and benchmarks. Our proactive
                  approach includes regular reviews, feedback mechanisms, and
                  issue resolution to ensure compliance and service excellence.
                </p>
                <p>
                  4. Risk Mitigation and Compliance We mitigate risks associated
                  with vendor relationships through rigorous compliance checks
                  and audits. Our vendor management framework includes
                  contingency planning and alternative sourcing strategies to
                  minimize disruptions.
                </p>
                <p className="font-semibold">
                  Our Vendor Management Services Include:
                </p>
                <p>• Vendor Identification and Due Diligence</p>
                <p>• Contract Negotiation and Management</p>
                <p>• Performance Monitoring and Evaluation</p>
                <p>• Risk Assessment and Mitigation</p>
                <p>• Vendor Relationship Enhancement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorManagemnet;
