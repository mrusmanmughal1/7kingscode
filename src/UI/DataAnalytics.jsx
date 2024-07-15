/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DataAnalytics = () => {
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
                  <p id="data-analytics">
                    {" "}
                    Data Analytics & Business Intelligence
                  </p>
                </div>
                <p>
                  Harness the power of data with advanced data analytics and
                  business intelligence (BI) solutions from 7Kings Code. We
                  offer tailored analytics services to extract actionable
                  insights, drive informed decision-making, and unlock new
                  growth opportunities for your business.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Data Analytics/Business
                  Intelligence?
                </p>
                <p>
                  1. Expertise in Data Analysis Our team of data analysts and BI
                  specialists excels in extracting, transforming, and analyzing
                  data from diverse sources. We apply advanced analytics
                  techniques to uncover trends, patterns, and correlations that
                  drive business outcomes.
                </p>
                <p>
                  2. Customized BI Solutions We develop customized BI solutions
                  tailored to your industry, business objectives, and data
                  requirements. Our solutions include interactive dashboards,
                  predictive analytics, and data visualization tools that
                  empower stakeholders with actionable insights.
                </p>
                <p>
                  3. Data-Driven Decision Making We enable data-driven
                  decision-making across your organization. Our BI solutions
                  provide real-time analytics, performance metrics, and KPI
                  tracking to support strategic planning, operational
                  efficiency, and revenue growth.
                </p>
                <p>
                  4. Scalable Analytics Infrastructure We deploy scalable
                  analytics infrastructure that adapts to your growing data
                  needs. Whether on-premises or cloud-based, our BI solutions
                  ensure high-performance data processing and scalability for
                  future expansions.
                </p>
                <p className="font-semibold">
                  Our Data Analytics/Business Intelligence Services Include:
                </p>
                <p>• Data Visualization and Reporting</p>
                <p>• Predictive Analytics and Forecasting</p>
                <p>• Performance Monitoring and KPI Tracking</p>
                <p>• Data Integration and ETL Processes</p>
                <p>• Data Mining and Pattern Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalytics;
