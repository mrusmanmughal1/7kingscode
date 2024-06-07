/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
import { BsBarChart } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
const BestSolution = () => {
  const [hover, setHover] = useState();

  const arrofContent = [
    {
      title: "Consulting Services",
      desc: " IT Strategy and Planning,Business Process Analysis and Optimization,IT Governance and Compliance",
      icon: <CiBank />,
    },
    {
      title: "Cyber Security Services",
      desc: " Security Risk Assessments,Vulnerability Management,Penetration Testing,Incident Response and Recovery",
      icon: <BsBarChart />,
    },
    {
      title: "Software Solutions",
      desc: " Custom Software Development ,Enterprise Resource Planning (ERP) , Software Development, ",
      icon: <IoRocketOutline />,
    },
  ];
  return (
    <div className=" md:p-12">
      <div className=" flex lg:flex-row flex-col container gap-10 2xl:gap-20  w-11/12  lg:w-[80%] 2xl:w-3/4  pt-20 md:pt-32   mx-auto">
        {arrofContent.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            className="  overflow-hidden  hover:bg-black shadow-sm space-y-2 text-black hover:text-white  hover:-translate-y-8 transition-all duration-500   px-8 py-8"
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
