/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import feature from "../assets/images/feature-about-bg.jpg";
import { CiBank } from "react-icons/ci";
import { IoBusinessSharp } from "react-icons/io5";
import { GiFlyingDagger } from "react-icons/gi";
const BestSolution = () => {
  const [hover, setHover] = useState();
  const aa = [
    {
      title: "A Best Business Solutions",
      desc: " We offers a full-cycle development services that meet business ",
      icon: <CiBank />,
    },
    {
      title: "Business Growth Planning",
      desc: " We offers a full-cycle development services that meet business",
      icon: <IoBusinessSharp />,
    },
    {
      title: "Search Engine Optimization",
      desc: " We offers a full-cycle development services that meet business ",
      icon: <GiFlyingDagger />,
    },
  ];
  return (
    <div className="businessGrowth pb-16">
      <div className="flex lg:flex-row flex-col container gap-16 w-11/12 pt-16 md:pt-24 lg:w-3/4 mx-auto">
        {aa.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            className="  overflow-hidden bg-white  hover:bg-black shadow-md space-y-2 text-black hover:text-white  
          hover:-translate-y-8 transition-all duration-500  px-8 py-8"
          >
            <div className=" flex justify-between  items-center font-bold text-xl  ">
              <p>{item.title} </p>
              <p
                className={`${
                  hover === index && "before:bg-blue-900 before:opacity-100 "
                } text-5xl  text-blue-secondary relative   widget -top-4 best-icon `}
              >
                {item.icon}
              </p>
            </div>
            <p className={`${hover === index && "text-white"} text-gray-500`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSolution;
