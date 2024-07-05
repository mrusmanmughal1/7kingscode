/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
import { IoBusinessSharp } from "react-icons/io5";
import { GiFlyingDagger } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { RiBuilding2Line } from "react-icons/ri";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
const BusinessGrowth = () => {
  const [hover, setHover] = useState(null);
  const aa = [
    {
<<<<<<< HEAD
      title: "OFF-SHORE & ON-SHORE TEAMS  ",
      desc: "7 Kings Code operates on an offshore-onshore model, with team members located globally and on-site with clients, working together seamlessly. ",
=======
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
    {
      title: "OFF-SHORE & ON-SHORE TEAMS",
      desc: " Seamlessly integrated global and local teams ensuring round-the-clock productivity and expertise.",
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
      icon: <CiBank />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
<<<<<<< HEAD
      title: "TALENT ACQUISITION & VISA SPONSORSHIP ",
      desc: "7 Kings Code recruits top talent and sponsors visas, attracting skilled professionals nationwide to meet client needs. ",

=======
      title: "TALENT ACQUISITION & VISA SPONSORSHIP",
      desc: " Streamlined recruitment and visa processes to attract top global talent.",
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
      icon: <IoBusinessSharp />,
      link: "/service/TalentAquisition",
    },
    {
<<<<<<< HEAD
      title: "MANAGEMENT CONSULTING      ",
      desc: "7 Kings Code supports clients throughout their recruitment journey, from sourcing to negotiation. Our extensive database ensures selection of proficient consultants, driving business success. ",

      icon: <GiFlyingDagger />,
=======
      title: "MANAGEMENT CONSULTING",
      desc: "Expert guidance to drive strategic growth and operational excellence. ",
      icon: <GrUserManager />,
      link: "/service/ManageConsult",
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
    },
  ];

  return (
    <div className="businessGrowth pb-16">
<<<<<<< HEAD
      <div className="flex lg:flex-row flex-col container gap-16 w-11/12 pt-16 md:pt-24 lg:w-[80%] mx-auto">
=======
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row flex-col container gap-8 w-11/12 pt-16 md:pt-24 lg:w-[80%] mx-auto">
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
        {aa.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            className={`overflow-hidden bg-white hover:bg-black shadow-md space-y-2 text-black hover:text-white
                hover:-translate-y-8 transition-all duration-500 px-8 py-8 flex-1 ${
                  hover === index ? "lg:-translate-y-8" : ""
                }`}
          >
            <NavLink key={index} to={item.link}>
              <div className="flex justify-between items-center uppercase font-bold text-lg">
                <p>{item.title}</p>
                <p
                  className={`text-5xl text-blue-secondary relative widget -top-4 best-icon ${
                    hover === index
                      ? "before:bg-blue-900 before:opacity-100"
                      : ""
                  }`}
                >
                  {item.icon}
                </p>
              </div>
              <p
                className={`${
                  hover === index ? "text-white" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessGrowth;
