/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineForm } from "react-icons/ai";
import contact from "../assets/images/contact-main.jpg";
import { GrFormLocation } from "react-icons/gr";

const TalkWithUs = () => {
  return (
    <div className="p-10 lg:p-40">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Content Section */}
        <div className="flex gap-3 items-center mb-6">
          <AiOutlineForm
            className="text-6xl text-blue-secondary"
            aria-hidden="true"
          />
          <p className="text-blue-secondary font-semibold text-2xl">
            Let’s Talk With Us
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="text-4xl font-bold mb-6">
            Grow Your Business With Our Expertise
          </div>
          <div className="mb-6">
            <p className="text-gray-500">
              System is a term used to refer to an organized collection of
              symbols and processes that may be used to operate on such symbols.
            </p>
          </div>
          <div className="mb-12">
            <img
              src={contact}
              alt="Contact"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-start border-t border-b border-gray-300 py-12">
            <p className="text-blue-secondary font-bold text-lg lg:border-r lg:pr-6 border-black mb-4 lg:mb-0">
              Pakistan
            </p>
            <div className="flex gap-4 items-center lg:pl-6">
              <GrFormLocation
                className="text-3xl lg:text-4xl text-blue-secondary"
                aria-hidden="true"
              />
              <p className="text-lg">Phase 8 Ex View Park</p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="5"
                placeholder="Your Message"
                aria-required="true"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalkWithUs;
