/* eslint-disable no-unused-vars */
import React from "react";

const SolveProblem = () => {
  return (
    <div>
      <div className="flex justify-center items-center   lg:top-[-4rem] pt-20 w-full  ">
        <div className="w-full bg-blue-600 mx-auto p-8 ">
          <div className="flex  flex-col md:flex-row justify-center  gap-8 items-center">
            <div className="md:p-8">
              <div className=" text-lg  md:text-3xl w-8/12  font-semibold   text-white">
                7KingsCode Always Ready For Solve Your Problem
              </div>
            </div>
            <div className="">
              <button
                className="bg-white text-black py-5 px-12 font-semibold rounded hover:bg-black 
              hover:text-white hover:translate-y-1 transition duration-300"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveProblem;
