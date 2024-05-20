/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../assets/images/banner-4.jpg";

const TechnologyChallenges = () => {
  const container = [
    {
      title: "website",
      icon: "",
    },
    {
      title: "Android",
      icon: "",
    },
    {
      title: "ISO",
      icon: "",
    },
    {
      title: "IT",
      icon: "",
    },
    {
      title: "Wearable",
      icon: "",
    },
    {
      title: "TV",
      icon: "",
    },
  ];
  return (
    <div className="relative whatweSolve py-20">
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
        <p className="text-2xl leading-8 md:text-4xl  font-bold py-12  md:w-1/3 text-center">
          Help You Overcome Your Technology Challenges
        </p>
        </div>
        <div className="flex flex-wrap md:flex-row gap-6 justify-center mt-4 ">
          {container.map((item, index) => (
            <div
              key={index}
              className="w-48 h-48 items-center hover:text-black justify-center border border-gray-500 hover:bg-white"
            >
              <div className="text-center">
                <div className="mb-20">{item.icon}</div>
                <div className="text-lg font-semibold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyChallenges;
