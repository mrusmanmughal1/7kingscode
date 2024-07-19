/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import map from "../assets/Services/roadmap.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const TechnologyDevelopment = () => {
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
                  className="hidden w-full h-[500px] sm:block lg:block "
                  src={map}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="technology-develop"> Technology Roadmap Development</p>
                </div>
                <p>
                  {" "}
                  Plan and prioritize your technology investments with tailored
                  roadmap development services from 7Kings Code. We create
                  comprehensive technology roadmaps that align with your
                  business goals, ensuring efficient deployment and utilization
                  of IT resources.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Technology Roadmap Development?
                </p>
                <p>
                  1. Strategic Vision We define a clear strategic vision for
                  technology adoption and integration. Our roadmap development
                  process considers current infrastructure, future growth plans,
                  and emerging technologies to maximize ROI.
                </p>
                <p>
                  2. Lifecycle Management We optimize technology lifecycle
                  management through phased implementations and upgrades. Our
                  roadmaps outline timelines, milestones, and resource
                  allocations for seamless technology deployment and adoption.
                </p>
                <p>
                  3. Scalability and Flexibility We design scalable roadmaps
                  that accommodate evolving business needs and technological
                  advancements. Our solutions support agility and adaptability,
                  ensuring your IT infrastructure remains responsive to change.
                </p>
                <p>
                  4. Collaborative Approach We engage stakeholders throughout
                  the roadmap development process. Our collaborative approach
                  fosters alignment, buy-in, and commitment to achieving
                  technology goals across your organization.
                </p>
                <p className="font-semibold">
                  Our Technology Roadmap Development Services Include:
                </p>
                <p>• Needs Assessment and Gap Analysis</p>
                <p>• Technology Selection and Integration Planning</p>
                <p>• Resource Planning and Budgeting</p>
                <p>• Phased Implementation Strategies</p>
                <p>• Performance Metrics and Evaluation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyDevelopment;
