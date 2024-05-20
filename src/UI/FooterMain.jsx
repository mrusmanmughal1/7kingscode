import Logo from "../Components/Logo";
import { FaSquarePhone } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
const FooterMain = () => {
  return (
    <div className="bg-[#0f0c1d] ">
      <div className="w-3/4 text-white flex md:flex-row  gap-8 flex-col mx-auto py-20">
        <div className="space-y-4 w-full ">
          <Logo />
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
              <FaSquarePhone className="text-blue-secondary" /> +920000000000{" "}
            </p>
            <p className="flex gap-4">
              {" "}
              <SiImessage className="text-blue-secondary" />{" "}
              teczofficaila@gmail.com{" "}
            </p>
            <p className="flex gap-4">
              <FaMapMarkerAlt className="text-blue-secondary" /> 27 Division St,
              Sans fransisco , USA{" "}
            </p>
          </div>
        </div>
        <div className="  w-full   items-center  ">
          <div className="flex flex-col  items-start">
            <p className="font-semibold text-lg pb-8 text-center">
              Our Navigation
            </p>
            <div className="text-slate-400  gap-4 text-sm flex flex-col  justify-center">
              <a href="">About 7kings Code</a>

              <a href="">Meet the Team</a>

              <a href="">News & Projects </a>

              <a href="">Contact</a>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <p>Subscribe</p>
          <div className="border-b  flex justify-between items-center bg-transparent  py-4">
            <input
              type="text"
              className="bg-transparent border-none"
              placeholder="Get News & Updates"
            />
            <FaArrowRight />
          </div>
          <div className=" py-4  space-y-4  text-gray-400">
            <p> Exceptional Service. Less Disruption 100% Guaranteed. </p>

            <div className="flex gap-5 text-white">
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
