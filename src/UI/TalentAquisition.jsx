/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import talent from "../assets/Services/talentaquisition.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const TalentAquisition = () => {
  return (
    <>
      <div className="flex  gap-44 mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            {/* left  */}

            {/* right  */}
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden w-full h-[550px] sm:block lg:block "
                  src={talent}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p>TALENT ACQUISITION & VISA SPONSORSHIP</p>
                </div>
                <p>
                  Finding the right talent can be challenging. Our talent
                  acquisition services are geared towards identifying and
                  recruiting top-notch professionals who align with your
                  business goals. We also provide visa sponsorship, making the
                  process of hiring international talent smooth and hassle-free.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Talent Acquisition & Visa
                  Sponsorship?
                </p>
                <p>
                  1. Global Reach We have a vast network of skilled
                  professionals worldwide. Our talent acquisition strategies are
                  designed to find the perfect fit for your business, no matter
                  where they are located.
                </p>
                <p>
                  2. Expertise in Visa Sponsorship Navigating visa sponsorship
                  can be challenging. Our team of experts handles all aspects of
                  the process, ensuring compliance with immigration laws and a
                  smooth transition for your new hires.
                </p>
                <p>
                  3. Customized Recruitment Solutions We understand that each
                  business has unique hiring needs. Our tailored recruitment
                  solutions are designed to align with your specific
                  requirements, ensuring you get the right talent for the right
                  roles.
                </p>
                <p>
                  4. Efficient and Streamlined Process Our efficient recruitment
                  process ensures timely hiring, reducing the time-to-fill for
                  critical positions. We manage everything from candidate
                  sourcing to onboarding, so you can focus on your core business
                  activities.
                </p>
                <p className="font-semibold">
                  Our Talent Acquisition & Visa Sponsorship Services Include:
                </p>
                <p>
                  • Candidate Sourcing: Identify and attract top talent from a
                  global pool of candidates with our advanced sourcing
                  techniques.
                </p>
                <p>
                  • Screening and Interviewing: Conduct thorough screenings and
                  interviews to ensure only the best candidates are selected for
                  your organization.
                </p>
                <p>
                  • Visa Processing: Handle all aspects of visa sponsorship,
                  including paperwork, compliance, and coordination with
                  immigration authorities.
                </p>
                <p>
                  • Onboarding Support: Provide comprehensive support to new
                  hires, ensuring a smooth onboarding process and quick
                  adaptation to their new roles.
                </p>
                <p>
                  • Relocation Assistance: Assist with the relocation process,
                  including housing, transportation, and settling-in services
                  for international hires.
                </p>
                <p>
                  • Retention Strategies: Develop and implement retention
                  strategies to keep your top talent engaged and committed to
                  your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentAquisition;
