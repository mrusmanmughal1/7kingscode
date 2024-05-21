/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Banner from "../assets/images/banner-4.jpg";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineApple } from "react-icons/ai";
import { MdWifiTethering } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";
import { MdOutlineConnectedTv } from "react-icons/md";
const TechnologyChallenges = () => {
  const [hover, setHover] = useState();
  const container = [
    {
      title: "website",
      icon: <AiOutlineGlobal />,
    },
    {
      title: "Android",
      icon: <AiOutlineApple />,
    },
    {
      title: "ISO",
      icon: <MdWifiTethering />,
    },
    {
      title: "ITO",
      icon: <AiFillFund />,
    },
    {
      title: "Wearable",
      icon: <AiFillCodepenSquare />,
    },
    {
      title: "TV",
      icon: <MdOutlineConnectedTv />,
    },
  ];
  return (
    <div className="relative whatweSolve py-32">
      <div
        className="  inset-0     flex flex-col items-center 
      justify-center text-white"
      >
        <div className="flex  flex-col justify-center items-center gap-2">
          <div className="">
            <span className="w-2 h-2 bg-white rounded-full "> </span>
            <p className="text-xl md:text-xl font-semibold text-[#3C72FC]">
              What we Solve
            </p>
          </div>
          <p className="text-2xl leading-8 md:text-4xl  font-bold pt-4 pb-10 md:w-1/3   text-center">
            Help You Overcome Your <br></br> Technology Challenges
          </p>
        </div>
        <div className="flex flex-wrap md:flex-row gap-6 justify-center mt-4  w-3/4 mx-auto">
          {container.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className="  px-10 items-center hover:text-black justify-center border border-gray-500 hover:bg-white"
            >
              <div className="text-center flex flex-col justify-center items-center">
                <div
                  className={`${
                    hover == index && "text-white bg-blue-500"
                  } text-4xl relative top-[-2rem] text-blue-secondary transition-all duration-700 bg-gray-900 p-5 rounded-full `}
                >
                  {item.icon}
                </div>
                <div className="text-lg font-medium pb-8">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyChallenges;
