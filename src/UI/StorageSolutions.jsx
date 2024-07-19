/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import storage from "../assets/Services/storagesolution.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const StorageSolutions = () => {
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
                  className="hidden w-full h-[] sm:block lg:block "
                  src={storage}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="solutions"> Data Storage Solutions</p>
                </div>
                <p>
                  {" "}
                  Optimize data management and storage with scalable data
                  storage solutions from 7Kings Code. We offer secure,
                  efficient, and cost-effective storage options designed to
                  accommodate your growing data needs while ensuring
                  accessibility and reliability.
                </p>
                <p className="font-semibold text-xl">
                  Why Choose 7Kings Code for Data Storage Solutions?
                </p>
                <p>
                  1. Scalable Storage Infrastructure Our data storage solutions
                  scale seamlessly to support increasing data volumes and
                  diverse storage requirements. Whether you need on-premises,
                  cloud-based, or hybrid storage solutions, we tailor our
                  offerings to meet your specific needs.
                </p>
                <p>
                  2. Performance and Reliability We prioritize performance and
                  reliability in data storage. Our solutions include high-speed
                  access, redundancy options, and data replication to ensure
                  data availability and minimize downtime.
                </p>
                <p>
                  3. Data Security We implement robust security measures to
                  protect stored data from unauthorized access and breaches. Our
                  solutions include encryption, access controls, and compliance
                  with data protection regulations to safeguard your sensitive
                  information.
                </p>
                <p>
                  4. Cost Efficiency We optimize storage resources to reduce
                  costs while maintaining high availability and performance. Our
                  solutions align storage capacities with actual data usage and
                  growth projections, ensuring cost-effective scalability.
                </p>
                <p className="font-semibold">
                  Our Data Storage Solutions Include:
                </p>
                <p>• Cloud Storage Solutions</p>
                <p>• On-Premises Storage Infrastructure</p>
                <p>• Hybrid Cloud Storage</p>
                <p>• Data Replication and Redundancy</p>
                <p>• Storage Optimization and Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageSolutions;
