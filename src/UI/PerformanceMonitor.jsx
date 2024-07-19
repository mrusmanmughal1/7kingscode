/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import application from "../assets/Services/performace.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const PerformanceMonitor = () => {
  return (
    <>
      <div className="flex-row mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden h-[500px] w-full sm:block lg:block "
                  src={application}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="performance-monitor">
                    {" "}
                    Comprehensive Performance Monitoring Solutions by 7Kings
                    Code
                  </p>
                </div>
                <p>
                  {" "}
                  Effective performance monitoring is essential for maintaining
                  the optimal performance and reliability of your IT
                  infrastructure. At 7Kings Code, we offer robust performance
                  monitoring solutions designed to identify issues, optimize
                  resources, and ensure seamless operations.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Performance Monitoring?
                </p>
                <p>
                  1. Expertise and Experience With extensive experience in
                  performance monitoring, 7Kings Code provides expertise in
                  monitoring and optimizing IT systems. Our team of specialists
                  ensures that your infrastructure operates at peak efficiency.
                </p>
                <p>
                  2. Advanced Monitoring Tools We leverage advanced monitoring
                  tools and technologies to track and analyze key performance
                  metrics in real-time. This proactive approach allows us to
                  detect issues before they impact your business.
                </p>
                <p>
                  3. Customized Monitoring Solutions We understand that every
                  business has unique performance monitoring needs. Our
                  solutions are tailored to align with your specific
                  requirements, applications, and performance goals.
                </p>
                <p>
                  4. Continuous Improvement Our commitment to continuous
                  improvement drives us to refine and enhance our monitoring
                  strategies. We proactively identify opportunities for
                  optimization and efficiency gains.
                </p>
                <p className="font-semibold">
                  Our Performance Monitoring Services Include:
                </p>
                <p>
                  • Real-Time Monitoring We monitor critical metrics such as CPU
                  usage, memory utilization, network performance, and
                  application response times in real-time. This ensures
                  immediate detection and resolution of performance issues.
                </p>
                <p>
                  • Alerting and Notifications Receive timely alerts and
                  notifications about performance anomalies and potential
                  issues. Our alerting system ensures that you are informed
                  promptly, allowing for swift corrective actions.
                </p>
                <p>
                  • Performance Analysis and Reporting We provide detailed
                  performance analysis and reports to help you understand
                  trends, identify bottlenecks, and make informed decisions for
                  optimizing your IT infrastructure.
                </p>
                <p>
                  • Capacity Planning Our capacity planning services ensure that
                  your IT resources are appropriately allocated to meet current
                  and future demands. We help you scale resources efficiently
                  based on performance data and projections.
                </p>
                <p>
                  • Security Monitoring In addition to performance metrics, we
                  monitor for security incidents and vulnerabilities. Our
                  integrated approach includes proactive security monitoring to
                  safeguard your IT environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceMonitor;
