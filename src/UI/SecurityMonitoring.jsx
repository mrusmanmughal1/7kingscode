/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import Security from "../assets/Services/securitymonitor.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const SecurityMonitoring = () => {
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
                  src={Security}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p id="security-monitor">
                    {" "}
                    Security Monitoring & Incident Response
                  </p>
                </div>
                <p>
                  {" "}
                  Stay ahead of cyber threats with proactive security monitoring
                  and incident response solutions from 7Kings Code. We offer
                  comprehensive services to detect, analyze, and respond to
                  security incidents swiftly, minimizing potential damages and
                  ensuring business continuity.
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Security Monitoring/Incident
                  Response?
                </p>
                <p>
                  1. Rapid Incident Detection Our advanced monitoring tools and
                  techniques enable rapid detection of security incidents. We
                  monitor networks, endpoints, and systems in real-time to
                  identify suspicious activities and potential threats.
                </p>
                <p>
                  2. Effective Incident Response We have a well-defined incident
                  response plan in place to handle security breaches promptly
                  and effectively. Our team conducts thorough investigations,
                  containment, and recovery efforts to minimize impact and
                  restore normal operations.
                </p>
                <p>
                  3. Continuous Monitoring and Threat Intelligence We provide
                  24/7 monitoring and proactive threat intelligence. Our
                  security experts analyze threat data and trends to anticipate
                  potential threats and strengthen your organization defenses.
                </p>
                <p>
                  4. Post-Incident Analysis and Recommendations After managing
                  an incident, we conduct post-incident analysis to identify
                  root causes and vulnerabilities. We provide recommendations
                  for improving security posture and preventing future
                  incidents.
                </p>
                <p className="font-semibold">
                  Our Security Monitoring & Incident Response Services Include:
                </p>
                <p>• Real-Time Security Monitoring</p>
                <p>• Incident Detection and Analysis</p>
                <p>• Incident Response and Containment</p>
                <p>• Post-Incident Analysis and Recommendations</p>
                <p>• Forensic Investigation and Analysis</p>
                <p>• Security Awareness Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityMonitoring;
