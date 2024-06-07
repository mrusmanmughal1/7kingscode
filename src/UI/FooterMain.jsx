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
import itly from "../assets/images/usa.png";

const FooterMain = () => {
  return (
    <div className="bg-[#0f0c1d]  text-sm">
      <div className="w-11/12 lg:w-4/5 text-white flex md:flex-row  gap-8 flex-col mx-auto py-20">
        <div className="space-y-4 w-full md:w-[30%] ">
          <div className="bg-white md:bg-transparent flex md:justify-start justify-center">
            <Logo />
          </div>
          <p className="text-xs text-gray-400">
            An Award-winning Miami IT Support Company That delivers all the
            power and capabilities of your own IT Department without the hassle
            and expenses of managing it yourself. Simply put you get more time
            to focus on growing your business
          </p>
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

        {/* //Head Office  */}

        <div className="">
          <p className="pb-3 font-medium text-white">HEAD OFFICE</p>
          <p className="flex gap-4">
            <FaMapMarkerAlt className="text-blue-secondary" />
            1401 N University Dr suite 503, Coral Springs, FL 33071, United
            State
          </p>
          <div className=" space-y-4 text-gray-400">
            <p className="flex gap-4">
              <FaSquarePhone className="text-blue-secondary" /> (+1) 9542728515
            </p>
            <p className="flex gap-4">
              <SiImessage className="text-blue-secondary" /> info@7kingscode.com
            </p>

            <div className="flex gap-4 text-2xl md:text-lg 2xl:text-2xl text-white">
              <FaSquareFacebook />
              <FaInstagram />
              <SiIndeed />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
