import Logo from "../Components/Logo";
import { FaSquarePhone } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import Dubai from "../assets/images/dubai.png";
import india from "../assets/images/india.png";
import pakistan from "../assets/images/pakistan.png";
import usa from "../assets/images/usa.png";

const FooterMain = () => {
  return (
    <div className="bg-[#0f0c1d]  text-sm">
      <div className="w-11/12 lg:w-4/5 text-white flex md:flex-row  gap-8 flex-col mx-auto py-20">
        <div className="space-y-4 w-full md:w-[30%] ">
          <div className="bg-white md:bg-transparent flex md:justify-start justify-center">
            <Logo />
          </div>
          <p className="text-xs text-gray-400">
            {" "}
            An Award-winning Miami IT Support Company That delivers all the
            power and capabilities of your own IT Department without the hassle
            and expenses of managing it yourself. Simply put you get more time
            to focus on growing your business
          </p>
          <div className=" space-y-4 text-gray-400">
            <p className="flex gap-4">
              {" "}
              <FaSquarePhone className="text-blue-secondary" /> (+91) 9581016898{" "}
            </p>
            <p className="flex gap-4">
              {" "}
              <SiImessage className="text-blue-secondary" /> info@7kingscode.com
            </p>
            <p className="flex gap-4">
              <FaMapMarkerAlt className="text-blue-secondary" />
              1401 N University Dr suite 503, Coral Springs, FL 33071, United
              State
            </p>
            <div className="flex gap-4 text-2xl md:text-lg text-white">
              <FaSquareFacebook />
              <FaInstagram />
              <SiIndeed />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className=" w-full  md:w-[30%] flex    md:justify-center     ">
          <div className="flex flex-col    items-start">
            <p className="font-medium  pb-8 text-center">Our Navigation</p>
            <div className="text-slate-400  gap-4  flex flex-col   ">
              <p href="">About 7kings Code</p>

              <p href="">Meet the Team</p>

              <p href="">News & Projects </p>

              <p href="">Contact</p>
            </div>
          </div>
        </div>

        <div className=" md:w-[40%] w-full ">
          <p className="font-medium">Other Offices</p>

          {/* //locations  */}

          <div className=" py-4  space-y-4     text-gray-400">
            <div className="flex gap-14  flex-col">
              <div className="flex   justify-between">
                <div className="flex flex-col md:flex-row w-full gap-2">
                  <div className="w-24">
                    <img src={Dubai} alt="" className=" " />
                  </div>
                  <div className="">
                    <p className="font-medium text-white ">Dubai</p>
                    <p className="text-xs">
                      516 Pinnacle Building - Al Barsha 1 - Dubai - United Arab
                    </p>
                  </div>
                </div>
                <div className="flex  w-full flex-col md:flex-row   gap-2">
                  <div className="w-24">
                    <img src={india} alt="" />
                  </div>
                  <div className="">
                    <p className="font-medium text-white">Italy</p>
                    <p className="text-xs">
                      Via Dante Alighieri, 5, Pero (MI)- ITALY
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-between">
                <div className="flex w-full  flex-col md:flex-row gap-2">
                  <div className="w-24">
                    <img src={pakistan} alt="" />
                  </div>
                  <div className="">
                    <p className="font-medium text-white">India</p>
                    <p className="text-xs">
                      9/3rt, Ground Floor, Sri Lakshmi Nilayam, SR Nagar,
                      Hyd-500038.
                    </p>
                  </div>
                </div>
                <div className="flex w-full  flex-col md:flex-row gap-2">
                  <div className="w-24">
                    <img src={usa} alt="" />
                  </div>
                  <div className="">
                    <p className="font-medium text-white">Pakistan</p>
                    <p className="text-xs">
                      Plot 16, DHA Phase 8 - Ex Park View Block D Park View CHS,
                      Lahore, Punjab
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
