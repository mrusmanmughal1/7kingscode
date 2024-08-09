/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Banner from "../assets/images/banner-4.jpg";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineApple } from "react-icons/ai";
import { MdWifiTethering } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";
import { MdOutlineConnectedTv } from "react-icons/md";
import icard from "../assets/logos/icard.png";
import pitahut from "../assets/logos/pitahut.png";
import desimart from "../assets/logos/desimart.png";
import jobsshopper from "../assets/logos/jobsshopper.png";
import wholesale from "../assets/logos/ezwholesale.png";
import { NavLink } from "react-router-dom";

const TechnologyChallenges = () => {
  const [hover, setHover] = useState();
  const container = [
    {
      title: "I-Card",
      icon: (
        <img src={icard} alt="web icon" className="inline-block w-28 h-28" />
      ),
      link: "/Products",
    },
    {
      title: "WholeSale EZ",
      icon: (
        <img
          src={wholesale}
          alt="web icon"
          className="inline-block w-28 h-28"
        />
      ),
      link: "/Products",
    },
    {
      title: "Jobs Shopper",
      icon: (
        <img
          src={jobsshopper}
          alt="web icon"
          className="inline-block w-28 h-28"
        />
      ),
      link: "/Products",
    },
    {
      title: "Desi Mart",
      icon: (
        <img src={desimart} alt="web icon" className="inline-block w-28 h-28" />
      ),
      link: "/Products",
    },
  ];
  return (
    <div className="relative bg-gray-900 py-32 whatweSolve">
      <div
        className="  inset-0     flex flex-col items-center
      justify-center text-white"
      >
        <div className="flex  flex-col justify-center items-center gap-2">
          <div className=" mb-10">
            <span className="w-2 h-2 bg-white rounded-full "> </span>
            <p className="text-xl md:text-2xl font-semibold text-[#3C72FC]">
              OUR PRODUCTS
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-2   md:flex flex-col gap-8 lg:gap-0 flex-wrap md:flex-row   justify-between md:justify-center lg:justify-between mt-4  w-11/12 md:w-3/4  lg:w-[80%] 2xl:w-[80%] mx-auto">
          {container.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className="  px-10 items-center justify-center border border-gray-500"
            >
              <NavLink key={index} to={item.link}>
                <div className="text-center flex flex-col justify-center items-center">
                  <div
                    className={`${
                      hover == index && "text-white "
                    } text-4xl relative  transition-all duration-700 p-5 `}
                  >
                    {item.icon}
                  </div>
                  <div className="text-lg font-medium pb-8">{item.title}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyChallenges;
