/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";
import { HashLink as NavLink } from "react-router-hash-link";
import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
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

              <div className="relative w-full   overflow-hidden">
                <ul className="peer absolute   top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className=" peer  absolute top-0  inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />

                <div className="flex   justify-between items-center  p-4">
                  <h1 className="   ">Infrastructure Management</h1>
                </div>

                <div className=" absolute  top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="   overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-44 ">
                  <section className="text-sm  px-4 ps-8 text-gray-700">
                    <NavLink
                      to="NetworkManage#network-management"
                      className="flex justify-between items-center      "
                    >
                      • Network Management
                    </NavLink>
                    <NavLink
                      to="ServerManage#server-management"
                      className="flex py-2  justify-between items-center      "
                    >
                      • Server Management
                    </NavLink>
                    <NavLink
                      to="CloudServices#cloud-services"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Cloud Services
                    </NavLink>
                    <NavLink
                      to="DataManage#data-management"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Data Center Management
                    </NavLink>
                    <NavLink
                      to="VirtualManage#virtual-management"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Virtualization Management
                    </NavLink>
                  </section>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}
              <div className="relative w-full  overflow-hidden">
                <ul className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="flex justify-between items-center hover:bg-blue-secondary hover:text-white p-4">
                  <h1 className="   ">Application Management</h1>
                </div>
                <div className=" absolute  top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="   overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-44 ">
                  <div className="text-sm px-4 ps-8 text-gray-700">
                    <NavLink
                      to="SoftwareMaintenance#software-maintenance"
                      className="flex justify-between items-center    "
                    >
                      • Software Support and Maintenance
                    </NavLink>
                    <NavLink
                      to="Applicationhosting#hosting"
                      className="flex py-2  justify-between items-center      "
                    >
                      • Application Hosting
                    </NavLink>
                    <NavLink
                      to="CustomDevelop#custom-develop"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Custom Development
                    </NavLink>
                    <NavLink
                      to="ApplicationIntegrate#application-integrate"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Application Integration
                    </NavLink>
                    <NavLink
                      to="PerformanceMonitor#performance-monitor"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Performance Monitoring
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* yahan tak  */}
              {/* // yahan se  */}

              <div className="relative w-full   overflow-hidden">
                <ul className="peer absolute  top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className=" peer  absolute top-0  inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex   justify-between items-center  p-4">
                  <h1 className="   ">Security Services</h1>
                </div>
                <div className=" absolute  top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="   overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-44 ">
                  <div className="text-sm  px-4 ps-8 text-gray-700">
                    <NavLink
                      to="CyberSecurityManage#cybersecurity"
                      className="flex justify-between items-center      "
                    >
                      • Cybersecurity Management
                    </NavLink>
                    <NavLink
                      to="RiskManagement#risk-management"
                      className="flex py-2  justify-between items-center      "
                    >
                      • Compliance/Risk Management
                    </NavLink>
                    <NavLink
                      to="SecurityMonitoring#security-monitor"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Security Monitoring/Incident Response
                    </NavLink>
                    <NavLink
                      to="AccessManagement#access-manage"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Identity/Access Management
                    </NavLink>
                    <NavLink
                      to="DataEncryption#data-encryption"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Data Encryption and Protection
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}

              {/* // yahan se  */}

              <div className="relative w-full   overflow-hidden">
                <ul className="peer absolute  top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className=" peer  absolute top-0  inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex   justify-between items-center  p-4">
                  <h1 className="   ">End-User Support</h1>
                </div>
                <div className=" absolute  top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="   overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-44 ">
                  <div className="text-sm  px-4 ps-8 text-gray-700">
                    <NavLink
                      to="DeskServices#help-desk"
                      className="flex justify-between items-center      "
                    >
                      • Help Desk Services
                    </NavLink>
                    <NavLink
                      to="DesktopManagement#desktop-manage"
                      className="flex py-2  justify-between items-center      "
                    >
                      • Desktop/Mobile Management
                    </NavLink>
                    <NavLink
                      to="RemoteSupport#remote"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Remote Support
                    </NavLink>
                    <NavLink
                      to="UserEducation#training"
                      className="flex py-2 justify-between items-center      "
                    >
                      • User Training and Education
                    </NavLink>
                    <NavLink
                      to="TroubleShooting#Troubleshooting"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Software/Hardware Troubleshooting
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}

              <div className="relative w-full   overflow-hidden">
                <ul className="peer absolute  top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className=" peer  absolute top-0  inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex   justify-between items-center  p-4">
                  <h1 className="   ">Data Management</h1>
                </div>
                <div className=" absolute  top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="   overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-44 ">
                  <div className="text-sm  px-4 ps-8 text-gray-700">
                    <NavLink
                      to="DisasterRecovery#Recovery"
                      className="flex justify-between items-center      "
                    >
                      • Backup and Disaster Recovery
                    </NavLink>
                    <NavLink
                      to="StorageSolutions#solutions"
                      className="flex py-2  justify-between items-center      "
                    >
                      • Data Storage Solutions
                    </NavLink>
                    <NavLink
                      to="DataSecurity#data-security"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Data Security
                    </NavLink>
                    <NavLink
                      to="DataAnalytics#data-analytics"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Data Analytics/Business Intelligence
                    </NavLink>
                    <NavLink
                      to="DataLifecycle#lifecycle"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Data Lifecycle Management
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* yahan tak  */}
              {/* // yahan se  */}

              <div className="relative w-full   overflow-hidden">
                <ul className="peer absolute  top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></ul>
                <input
                  type="checkbox"
                  className=" peer  absolute top-0  inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer bg-blue-100"
                />
                <div className="flex   justify-between items-center  p-4">
                  <h1 className="   ">IT Consulting and Strategy</h1>
                </div>
                <div className=" absolute  top-5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <AiOutlineArrowRight className="text-black" />
                </div>
                <div className="   overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-44 ">
                  <div className="text-sm  px-4 ps-8 text-gray-700">
                    <NavLink
                      to="StrategyPlanning#planning"
                      className="flex justify-between items-center      "
                    >
                      • IT Strategy and Planning
                    </NavLink>
                    <NavLink
                      to="TechnologyDevelopment#technology-develop"
                      className="flex py-2  justify-between items-center      "
                    >
                      • Technology Roadmap Development
                    </NavLink>
                    <NavLink
                      to="VendorManagemnet#vendor"
                      className="flex py-2 justify-between items-center      "
                    >
                      • Vendor Management
                    </NavLink>
                    <NavLink
                      to="PolicyGovernance#it-policy"
                      className="flex py-2 justify-between items-center      "
                    >
                      • IT Policy and Governance
                    </NavLink>
                    <NavLink
                      to="CostOptimization#optimization"
                      className="flex py-2 justify-between items-center      "
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
                Off Shore & On Shore Teams
                <AiOutlineArrowRight className="text-lg" />
              </NavLink>
              <NavLink
                to="TalentAquisition"
                className="flex justify-between  items-center hover:bg-blue-secondary hover:text-white p-4"
              >
                Talent Acquisition and Visa Sponsorship
                <AiOutlineArrowRight className="text-2xl" />
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
