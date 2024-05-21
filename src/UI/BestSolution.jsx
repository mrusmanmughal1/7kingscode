/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
 
import { BsBarChart } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
const BestSolution = () => {
  const [hover , setHover]=useState()
  const aa = [
    {
      title: "A Best Business Solutions",
      desc: " We offers a full-cycle development services that meet business ",
      icon: <CiBank />,
    },
    {
      title: "Business Growth Planning",
      desc: " We offers a full-cycle development services that meet business",
      icon: <BsBarChart />,
    },
    {
      title: "Search Engine Optimization",
      desc: " We offers a full-cycle development services that meet business ",
      icon: <IoRocketOutline />,
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col container gap-10 2xl:gap-20  w-11/12  2xl:w-3/4  pt-20 md:pt-32   mx-auto">
      {aa.map((item, index) => (
        <div
          key={index} 
          onMouseOver={()=>setHover(index)}
          onMouseLeave={() => setHover(null)}
          className="  overflow-hidden  hover:bg-black shadow-sm space-y-2 text-black hover:text-white  hover:-translate-y-8 transition-all duration-500  leading-8 px-8 py-8"
        >
          <div className=" flex justify-between   items-center font-bold text-xl  ">
            <p className="hover:text-blue-secondary duration-500 transition-all ">  {item.title} </p>
            <p className={ `${hover === index && 'before:bg-blue-900 before:opacity-100 text-white '} text-5xl  text-blue-secondary relative   widget -top-4 best-icon ` }>{item.icon}</p>
          </div>
          <p className={`${hover === index &&  "text-white"} text-gray-500`}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BestSolution;
