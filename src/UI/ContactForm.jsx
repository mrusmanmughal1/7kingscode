/* eslint-disable no-unused-vars */
import React from "react";
import {
  AiOutlineExclamationCircle,
  AiOutlineForm,
  AiOutlineMail,
} from "react-icons/ai";
import contact from "../assets/images/contact-main.jpg";
import { GrFormLocation } from "react-icons/gr";
import { FaSquarePhone } from "react-icons/fa6";
import { FaMailBulk, FaVoicemail } from "react-icons/fa";
import { CiEdit, CiPhone } from "react-icons/ci";
import { SlUser } from "react-icons/sl";

const TalkWithUs = () => {
  return (
    <div className="p-10 lg:p-40 w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-32">
        {/* Content Section */}

        <div className="w-full lg:w-1/2">
          <div className="flex gap-3 items-end mb-6">
            <AiOutlineForm
              className="text-6xl text-blue-secondary"
              aria-hidden="true"
            />
            <p className="text-blue-secondary font-semibold pb-2 text-lg">
              Let’s Talk With Us
            </p>
          </div>
          <div className="text-4xl font-bold mb-6">
            Grow Your Business With Our Expertise
          </div>
          <div className="mb-6">
            <p className="text-gray-500 text-sm leading-7">
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
          <div className="p-2 flex">
            <div className=" mb-4 border-l-2 p-8 border-gray-600">
              <h3 className="text-xl font-semibold mb-2">Pakistan Office</h3>
              <div className="flex">
                <p className="flex items-center text-5xl text-gray-700">
                  <GrFormLocation />
                </p>
                <p>
                  Plot # 16, DHA Phase 8 Ex-Park View Block D,Lahore Pakistan
                </p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <FaSquarePhone />
                </p>
                <p>(+91)9581016898</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <AiOutlineMail />
                </p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
            <div className="mb-4 p-8 border-l-2 pl-8 border-gray-600">
              <h3 className="text-xl font-semibold mb-2">India Office</h3>
              <div className="flex">
                <p className="flex items-center text-5xl text-gray-700">
                  <GrFormLocation />
                </p>
                <p>
                  9/3rt, Ground Floor, Sri Lakshmi Nilayam, SR Nagar,
                  Hyd-500038.
                </p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <FaSquarePhone />
                </p>
                <p>(+91)9581016898</p>
              </div>
              <div className="flex space-y-2">
                <p className="flex items-center px-3  text-2xl text-gray-700">
                  <AiOutlineMail />
                </p>
                <p>info@7kingscode.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full py-24 lg:w-1/2">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-6">
              <div className="border px-2 w-full flex items-center gap-2 ">
                <p>
                  <SlUser className="text-2xl text-gray-500" />
                </p>
                <input
                  type="text"
                  id="name"
                  className="outline-none bottom-0"
                  placeholder="First Name"
                  aria-required="true"
                />
              </div>
              <div className="border w-full p-4 flex  items-center gap-2 ">
                <p>
                  <SlUser className="text-2xl text-gray-500" />
                </p>
                <input
                  type="text"
                  id="name"
                  className="outline-none bottom-0"
                  placeholder="Last Name"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="border p-4 flex  items-center gap-2 ">
              <p>
                <AiOutlineMail className="text-2xl text-gray-500" />
              </p>
              <input
                type="email"
                id="email"
                className="outline-none bottom-0"
                placeholder="Email Address"
                aria-required="true"
              />
            </div>
            <div className="border p-4 flex  items-center gap-2 ">
              <p>
                <CiPhone className="text-2xl text-gray-500" />
              </p>
              <input
                type="number"
                id="phone"
                className="outline-none bottom-0"
                placeholder="Phone Number"
                aria-required="true"
              />
            </div>
            <div className="border p-4 flex  items-center gap-2 ">
              <p>
                <SlUser className="text-2xl text-gray-500" />
              </p>
              <input
                type="text"
                id="name"
                className="outline-none bottom-0"
                placeholder="Company Name"
                aria-required="true"
              />
            </div>
            <div className="border p-4 flex  items-center gap-2 ">
              <p>
                <AiOutlineExclamationCircle className="text-2xl text-gray-500" />
              </p>
              <input
                type="text"
                id="subject"
                className="outline-none bottom-0"
                placeholder="Your Subject"
                aria-required="true"
              />
            </div>
            <div className="border p-4 flex gap-2">
              <CiEdit className="text-2xl text-gray-500" />
              <textarea
                className="outline-none flex-1 resize-none"
                rows="5"
                placeholder="Write Your Message"
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
