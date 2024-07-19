/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import Infrastructure from "../assets/Services/cloudservices.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const CloudServices = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden h-[500px] w-full sm:block lg:block "
                  src={Infrastructure}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="cloud-services">
                    {" "}
                    Innovative Cloud Services by 7Kings Code
                  </p>
                </div>
                <p>
                  In the modern digital landscape, cloud services are essential
                  for business agility, scalability, and cost-efficiency. At
                  7Kings Code, we offer comprehensive cloud services designed to
                  meet the unique needs of your business, enabling you to stay
                  ahead of the competition.
                </p>
                <p className="font-semibold text-xl">
                  Why Choose 7Kings Code for Cloud Services?
                </p>
                <p>
                  1. Expertise and Experience With a proven track record in
                  cloud solutions, 7Kings Code provides expert guidance and
                  implementation. Our team of certified cloud professionals
                  ensures seamless migration and management of your cloud
                  infrastructure.
                </p>
                <p>
                  2. Customized Solutions We understand that every business has
                  different requirements. Our cloud services are tailored to fit
                  your specific needs, whether you are looking to migrate to the
                  cloud, optimize your current cloud setup, or enhance your
                  cloud security.
                </p>
                <p>
                  3. Scalability and Flexibility Our cloud solutions are
                  designed to grow with your business. Easily scale your
                  resources up or down based on demand, ensuring you only pay
                  for what you need and maintaining operational efficiency.
                </p>
                <p>
                  4. Robust Security Security is at the core of our cloud
                  services. We implement stringent security measures, including
                  encryption, multi-factor authentication, and regular security
                  audits, to protect your data and applications from threats.
                </p>
                <p className="font-semibold">Our Cloud Services Include:</p>
                <p>
                  • Cloud Migration Seamlessly transition your existing IT
                  infrastructure to the cloud with minimal downtime. Our experts
                  handle the entire migration process, ensuring data integrity
                  and continuity of service.
                </p>
                <p>
                  • Cloud Management and Optimization We provide ongoing
                  management and optimization of your cloud environment to
                  ensure maximum performance and cost-efficiency. This includes
                  monitoring, resource management, and performance tuning.
                </p>
                <p>
                  • Cloud Security Protect your cloud infrastructure with our
                  advanced security solutions. We offer comprehensive security
                  services, including threat detection, data encryption, and
                  compliance management.
                </p>
                <p>
                  • Disaster Recovery and Backup Ensure business continuity with
                  our disaster recovery and backup solutions. We provide
                  reliable backup services and quick recovery options to
                  safeguard your data against any unforeseen events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServices;
