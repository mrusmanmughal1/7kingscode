/* eslint-disable no-unused-vars */
import React from "react";

const Location = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="absolute inset-y-16 justify-center items-center">
          <div className="bg-blue-500 text-white p-24 rounded shadow-lg text-center">
            7KingsCode Always Ready To Solve Your Problem
          </div>
        </div>
        <div className=" flex w-full flex-col items-center p-6 mt-28">
          <iframe
            className="w-full h-[400px] "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.91100128774!2d74.35400461757607!3d31.44949103728648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190484b0a3c735%3A0x2a27b4c4f8a77c8e!2sDHA%20Phase%208%20Ex%20Park%20View%20-%20Block%20D%20Park%20View%20CHS%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
