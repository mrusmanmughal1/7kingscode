/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const OnShoreOffShoreTeam = () => {
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
                  <p>Off Shore & On Shore Teams</p>
                </div>
                <p>
                  At 7 Kings Code, we offer robust onshore and offshore team
                  solutions designed to maximize efficiency and reduce costs.
                  Whether you need a local presence or wish to leverage global
                  talent, our dedicated teams ensure seamless integration and
                  collaboration, delivering high-quality results every time.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Offshore & Onshore Teams?
                </p>
                <p>
                  1. Cost-Effective Solutions Leverage the benefits of offshore
                  teams to significantly reduce operational costs while
                  maintaining high-quality standards. Our solutions are designed
                  to deliver excellent value for your investment
                </p>
                <p>
                  2. Access to Global Talent Tap into a diverse pool of skilled
                  professionals from around the world. Our offshore and onshore
                  teams bring a wealth of expertise and experience to your
                  projects, ensuring superior outcomes.
                </p>
                <p>
                  3. Seamless Integration We ensure that your offshore and
                  onshore teams work cohesively as part of your extended
                  workforce. Our proven integration strategies facilitate smooth
                  collaboration and communication across all teams.
                </p>
                <p>
                  4. Scalability and Flexibility Scale your team size up or down
                  based on project requirements with ease. Our flexible staffing
                  solutions allow you to adapt quickly to changing business
                  needs and market demands.
                </p>
                <p className="font-semibold">
                  Our Offshore & Onshore Team Services Include:
                </p>
                <p>
                  • Dedicated Development Teams: Build dedicated teams of
                  developers, designers, and other specialists to work
                  exclusively on your projects.
                </p>
                <p>
                  • Project-Based Teams: Assemble teams for specific projects to
                  ensure timely and successful completion.
                </p>
                <p>
                  • Support and Maintenance Teams: Maintain and support your
                  existing systems with our skilled offshore and onshore support
                  teams.
                </p>
                <p>
                  • Consulting Teams: Access expert consulting services to drive
                  innovation and strategic initiatives within your organization.
                </p>
                <p>
                  • Managed Services: Benefit from fully managed services that
                  oversee your offshore and onshore operations, ensuring
                  efficiency and performance.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnShoreOffShoreTeam;
