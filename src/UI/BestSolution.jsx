/* eslint-disable no-unused-vars */
import React from "react";
import { CiBank } from "react-icons/ci";
import { IoBusinessSharp } from "react-icons/io5";
import { GiFlyingDagger } from "react-icons/gi";
const BestSolution = () => {
  const aa = [
    {
      title: "Best Business Solutions",
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
    <div className="flex container gap-20 px-28 py-12">
      {aa.map((item, index) => (
        <div key={index} className="border leading-9 px-8 py-8">
          <div className=" flex justify-between text-[#0f0D1D] font-bold text-xl ">
            {item.title} <p className="text-5xl ">{item.icon}</p>
          </div>
          <p className=" text-neutral-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BestSolution;
