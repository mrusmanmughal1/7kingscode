/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
import { IoBusinessSharp } from "react-icons/io5";
import { GiFlyingDagger } from "react-icons/gi";

const BestSolution = () => {
  const [hover, setHover] = useState(null);
  const aa = [
    {
      title: "OFF-SHORE & ON-SHORE TEAMS",
      desc: "7 Kings Code operates on an offshore-onshore model, with team members located globally and on-site with clients, working together seamlessly.",
      icon: <CiBank />,
    },
    {
      title: "TALENT ACQUISITION & VISA SPONSORSHIP",
      desc: "7 Kings Code recruits top talent and sponsors visas, attracting skilled professionals nationwide to meet client needs.",
      icon: <IoBusinessSharp />,
    },
    {
      title: "MANAGEMENT CONSULTING",
      desc: "7 Kings Code supports clients throughout their recruitment journey, from sourcing to negotiation. ",
      icon: <GiFlyingDagger />,
    },
  ];

  return (
    <div className="businessGrowth pb-16">
      <div className="flex lg:flex-row flex-col container gap-8 w-11/12 pt-16 md:pt-24 lg:w-[80%] mx-auto">
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
            <div className="flex justify-between items-center font-bold text-lg">
              <p>{item.title}</p>
              <p
                className={`text-5xl text-blue-secondary relative widget -top-4 best-icon ${
                  hover === index ? "before:bg-blue-900 before:opacity-100" : ""
                }`}
              >
                {item.icon}
              </p>
            </div>
            <p
              className={`${hover === index ? "text-white" : "text-gray-500"}`}
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
