/* eslint-disable no-unused-vars */
import React from "react";

const Location = () => {
  return (
    <div className="relative">
      <div className="  lg:absolute flex justify-center items-center   lg:top-[-6.5rem]  pt-8  w-full  ">
        <div className="w-full lg:w-[80%] bg-blue-600 mx-auto p-8 ">
          <div className="flex  flex-col md:flex-row md:justify-between justify-center  gap-8 items-center">
            <div className="md:p-8">
              <div className=" text-lg  md:text-3xl  md:text-start  text-center font-semibold   text-white">
                7KingsCode Always Ready For <br></br> Solve Your Problem
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

      <div className=" flex w-full items-center  lg:mt-28">
        <iframe
          className="w-full h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.405452749085!2d-80.25505822571802!3d26.248501288321116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90514edcb9f43%3A0xf7d230b41095b629!2s1401%20N%20University%20Dr%2C%20Coral%20Springs%2C%20FL%2033071%2C%20USA!5e0!3m2!1sen!2s!4v1716479832435!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
