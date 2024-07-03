/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiBuilding2Line } from "react-icons/ri";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
const BestSolution = () => {
  const [hover, setHover] = useState();

  const arr = [
    {
      title: "Infrastructure Management",
      desc: "Ensuring robust, efficient, and scalable IT infrastructure for seamless operations.",
      icon: <RiBuilding2Line />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
      title: " Application Management",
      desc: " End-to-end services for optimizing, maintaining, and supporting your software applications..",
      icon: <TbDeviceMobileCog />,
      link: "/service/TalentAquisition",
    },
    {
      title: "Security Services",
      desc: "Comprehensive protection solutions to safeguard your assets and data. ",
      icon: <GrShieldSecurity />,
      link: "/service/ManageConsult",
    },
  ];
  return (
    <div className="businessGrowth  md:">
      <div className=" flex lg:flex-row flex-col container gap-10    w-11/12  lg:w-[80%] 2xl:w-3/4  py-20     mx-auto">
        {arr.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            className="  overflow-hidden  w-[33%] hover:bg-black  space-y-2 bg-white shadow-md text-black hover:text-white  hover:-translate-y-8 transition-all duration-500   px-8 py-8"
          >
            <div className=" flex justify-between   items-center font-bold ">
              <p className="hover:text-blue-secondary duration-500 transition-all  text-xl lg:text-[20px]   ">
                {item.title}
              </p>
              <p
                className={`${
                  hover === index &&
                  "before:bg-blue-900 before:opacity-100 text-white "
                } text-5xl  text-blue-secondary relative   widget -top-4 best-icon `}
              >
                {item.icon}
              </p>
            </div>
            <p
              className={`${
                hover === index && "text-white"
              } text-gray-500  text-xl lg:text-[14px]  leading-7 `}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSolution;
