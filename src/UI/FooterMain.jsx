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
      <div className="w-11/12 lg:w-3/4 text-white flex md:flex-row  gap-8 flex-col mx-auto py-20">
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
              <FaSquarePhone className="text-blue-secondary" /> (+91)9581016898{" "}
            </p>
            <p className="flex gap-4">
              {" "}
              <SiImessage className="text-blue-secondary" /> info@7kingscode.com
            </p>
            <p className="flex gap-4">
              <FaMapMarkerAlt className="text-blue-secondary" />
              9/3rt, Ground Floor, Sri Lakshmi Nilayam, SR Nagar, Hyd-500038.
            </p>
            <div className="flex gap-4 text-white">
              <FaSquareFacebook />
              <FaInstagram />
              <SiIndeed />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="  w-full flex    md:justify-center     ">
          <div className="flex flex-col    items-start">
            <p className="font-medium  pb-8 text-center">Our Navigation</p>
            <div className="text-slate-400  gap-4 text-sm flex flex-col   ">
              <a href="">About 7kings Code</a>

              <a href="">Meet the Team</a>

              <a href="">News & Projects </a>

              <a href="">Contact</a>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <p className="font-medium">Other Locations</p>

          <div className=" py-4  space-y-4  text-gray-400">
            <div className="">
              <p className="font-medium text-white">
                Asian Regional Head Office
              </p>
              <p>
                9/3rt Street Number-2, Sanjeeva Reddy Nagar, Hyderabad,
                Telangana 500038 INDIA
              </p>
            </div>
            <div className="">
              <p className="font-medium text-white">
                Europe Regional Head Office
              </p>
              <p>Via Dante Alighieri 5, Pero, Milano, Italy</p>
            </div>
            <div className="">
              <p  className="font-medium text-white">South Asian & Middle East Head office</p>
              <p>G 34 Phase 1 DHA</p>
              <p>Lahore 54792</p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
