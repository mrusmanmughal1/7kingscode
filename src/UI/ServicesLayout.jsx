/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MainBanner from "./MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";
import { HashLink as NavLink } from "react-router-hash-link";
import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };
  return (
    <>
      <MainBanner
        text="About Us"
        title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
      />
      <div className="flex-col  service flex  w-[100%] lg:flex-row lg:w-[80%]  mx-auto  gap-24 py-32">
        <div className="w-[90%] lg:w-[30%] mx-auto  ">
          <div className="flex flex-col lg:flex-col gap-20">
            {/* left  */}
            <div className="bg-[#F6F7F9] shadow-md  p-4  w-full mx-auto">
              <div className="font-semibold text-xl pl-4">Services</div>
              {/* // yahan se  */}
              <div className="relative w-full overflow-hidden mt-8">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex justify-between items-center p-4">
                  <h1>Infrastructure Management</h1>
                </div>
                <div className="absolute top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44">
                  <section className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="NetworkManage#network-management"
                      onClick={() => handleServiceClick("NetworkManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "NetworkManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Network Management
                    </NavLink>
                    <NavLink
                      to="ServerManage#server-management"
                      onClick={() => handleServiceClick("ServerManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "ServerManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Server Management
                    </NavLink>
                    <NavLink
                      to="CloudServices#cloud-services"
                      onClick={() => handleServiceClick("CloudServices")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "CloudServices"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Cloud Services
                    </NavLink>
                    <NavLink
                      to="DataManage#data-management"
                      onClick={() => handleServiceClick("DataManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "DataManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Data Center Management
                    </NavLink>
                    <NavLink
                      to="VirtualManage#virtual-management"
                      onClick={() => handleServiceClick("VirtualManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "VirtualManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Virtualization Management
                    </NavLink>
                  </section>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}
              <div className="relative w-full overflow-hidden ">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="flex justify-between items-center hover:bg-blue-secondary hover:text-white p-4">
                  <h1>Application Management</h1>
                </div>
                <div className="absolute top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44">
                  <div className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="SoftwareMaintenance#software-maintenance"
                      onClick={() => handleServiceClick("SoftwareMaintenance")}
                      className={`flex justify-between items-center ${
                        activeService === "SoftwareMaintenance"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Software Support and Maintenance
                    </NavLink>
                    <NavLink
                      to="Applicationhosting#hosting"
                      onClick={() => handleServiceClick("ApplicationHosting")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "ApplicationHosting"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Application Hosting
                    </NavLink>
                    <NavLink
                      to="CustomDevelop#custom-develop"
                      onClick={() => handleServiceClick("CustomDevelopment")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "CustomDevelopment"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Custom Development
                    </NavLink>
                    <NavLink
                      to="ApplicationIntegrate#application-integrate"
                      onClick={() =>
                        handleServiceClick("ApplicationIntegration")
                      }
                      className={`flex py-2 justify-between items-center ${
                        activeService === "ApplicationIntegration"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Application Integration
                    </NavLink>
                    <NavLink
                      to="PerformanceMonitor#performance-monitor"
                      onClick={() =>
                        handleServiceClick("PerformanceMonitoring")
                      }
                      className={`flex py-2 justify-between items-center ${
                        activeService === "PerformanceMonitoring"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Performance Monitoring
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}
              <div className="relative w-full overflow-hidden ">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex justify-between items-center p-4">
                  <h1>Security Services</h1>
                </div>
                <div className="absolute top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44">
                  <div className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="CyberSecurityManage#cybersecurity"
                      onClick={() => handleServiceClick("CyberSecurityManage")}
                      className={`flex justify-between items-center ${
                        activeService === "CyberSecurityManage"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Cybersecurity Management
                    </NavLink>
                    <NavLink
                      to="RiskManagement#risk-management"
                      onClick={() => handleServiceClick("RiskManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "RiskManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Compliance/Risk Management
                    </NavLink>
                    <NavLink
                      to="SecurityMonitoring#security-monitor"
                      onClick={() => handleServiceClick("SecurityMonitoring")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "SecurityMonitoring"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Security Monitoring/Incident Response
                    </NavLink>
                    <NavLink
                      to="AccessManagement#access-manage"
                      onClick={() => handleServiceClick("AccessManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "AccessManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Identity/Access Management
                    </NavLink>
                    <NavLink
                      to="DataEncryption#data-encryption"
                      onClick={() => handleServiceClick("DataEncryption")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "DataEncryption"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Data Encryption and Protection
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}
              <div className="relative w-full overflow-hidden ">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex justify-between items-center p-4">
                  <h1>End-User Support</h1>
                </div>
                <div className="absolute top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44">
                  <div className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="DeskServices#help-desk"
                      onClick={() => handleServiceClick("DeskServices")}
                      className={`flex justify-between items-center ${
                        activeService === "DeskServices"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Help Desk Services
                    </NavLink>
                    <NavLink
                      to="DesktopManagement#desktop-manage"
                      onClick={() => handleServiceClick("DesktopManagement")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "DesktopManagement"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Desktop/Mobile Management
                    </NavLink>
                    <NavLink
                      to="RemoteSupport#remote"
                      onClick={() => handleServiceClick("RemoteSupport")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "RemoteSupport"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Remote Support
                    </NavLink>
                    <NavLink
                      to="UserEducation#training"
                      onClick={() => handleServiceClick("UserEducation")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "UserEducation"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • User Training and Education
                    </NavLink>
                    <NavLink
                      to="TroubleShooting#Troubleshooting"
                      onClick={() => handleServiceClick("TroubleShooting")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "TroubleShooting"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Software/Hardware Troubleshooting
                    </NavLink>
                  </div>
                </div>
              </div>{" "}
              {/* yahan tak  */}
              {/* // yahan se  */}
              <div className="relative w-full overflow-hidden ">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex justify-between items-center p-4">
                  <h1>Data Management</h1>
                </div>
                <div className="absolute top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44">
                  <div className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="DisasterRecovery#Recovery"
                      onClick={() => handleServiceClick("DisasterRecovery")}
                      className={`flex justify-between items-center ${
                        activeService === "DisasterRecovery"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Backup and Disaster Recovery
                    </NavLink>
                    <NavLink
                      to="StorageSolutions#solutions"
                      onClick={() => handleServiceClick("StorageSolutions")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "StorageSolutions"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Data Storage Solutions
                    </NavLink>
                    <NavLink
                      to="DataSecurity#data-security"
                      onClick={() => handleServiceClick("DataSecurity")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "DataSecurity"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Data Security
                    </NavLink>
                    <NavLink
                      to="DataAnalytics#data-analytics"
                      onClick={() => handleServiceClick("DataAnalytics")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "DataAnalytics"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Data Analytics/Business Intelligence
                    </NavLink>
                    <NavLink
                      to="DataLifecycle#lifecycle"
                      onClick={() => handleServiceClick("DataLifecycle")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "DataLifecycle"
                          ? "text-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      • Data Lifecycle Management
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}
              <div className="relative w-full overflow-hidden">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="flex justify-between items-center p-4">
                  <h1>IT Consulting and Strategy</h1>
                </div>
                <div className="absolute top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44">
                  <div className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="StrategyPlanning#planning"
                      onClick={() => handleServiceClick("StrategyPlanning")}
                      className={`flex justify-between items-center ${
                        activeService === "StrategyPlanning"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      • IT Strategy and Planning
                    </NavLink>
                    <NavLink
                      to="TechnologyDevelopment#technology-develop"
                      onClick={() =>
                        handleServiceClick("TechnologyDevelopment")
                      }
                      className={`flex py-2 justify-between items-center ${
                        activeService === "TechnologyDevelopment"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      • Technology Roadmap Development
                    </NavLink>
                    <NavLink
                      to="VendorManagemnet#vendor"
                      onClick={() => handleServiceClick("VendorManagemnet")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "VendorManagemnet"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      • Vendor Management
                    </NavLink>
                    <NavLink
                      to="PolicyGovernance#it-policy"
                      onClick={() => handleServiceClick("PolicyGovernance")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "PolicyGovernance"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      • IT Policy and Governance
                    </NavLink>
                    <NavLink
                      to="CostOptimization#optimization"
                      onClick={() => handleServiceClick("CostOptimization")}
                      className={`flex py-2 justify-between items-center ${
                        activeService === "CostOptimization"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      • Cost Optimization
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}
              <NavLink
                to="UXDesigner"
                className="flex justify-between items-center  hover:bg-blue-secondary hover:text-white p-4"
              >
                UI/UX Designing
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="OnShoreOffShoreTeam"
                className="flex justify-between  capitalize items-center  hover:bg-blue-secondary hover:text-white p-4 "
              >
                Off Shore/On Shore
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="TalentAquisition"
                className="flex justify-between  items-center hover:bg-blue-secondary hover:text-white p-4"
              >
                Talent Acquisition
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="ManageConsult"
                className="flex justify-between items-center hover:bg-blue-secondary hover:text-white p-4"
              >
                Management Consulting
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="WebDevelopment"
                className="flex justify-between items-center hover:bg-blue-secondary hover:text-white p-4"
              >
                Web Development
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="DigitalMarketing"
                className="flex justify-between items-center hover:bg-blue-secondary hover:text-white p-4"
              >
                Digital Marketing
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
            </div>
            {/* right  */}
            <div className="bg-blue-secondary text-white p-4 w-full  space-y-8">
              <div className="font-semibold text-xl">
                <p>Have Any Problem? Please Contact</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-950 text-3xl p-3  rounded-full">
                  <FiPhone />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300">Call Us</p>
                  <p className="text-sm">(+1) 954-272-8515</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-950 text-3xl p-3  rounded-full">
                  <IoMail />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300">Write to us</p>
                  <p className="text-sm">info@7kingscode.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-950 text-3xl p-3 rounded-full">
                  <IoLocation />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-300">Our Address</p>
                  <p className="text-sm">
                    1401 N University Dr suite 503, Coral Springs, FL 33071,
                    United State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
