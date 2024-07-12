import Logo from "../Components/Logo";
import { FaSquarePhone } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

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
              <NavLink to={"/"}>
                <p> What We Do </p>
              </NavLink>

              <NavLink to={"/about-us"}>
                <p> Who we Are </p>
              </NavLink>

              <NavLink to={"/services"}>
                <p> What We Offer </p>
              </NavLink>

              <NavLink to={"/contact-us"}>
                <p> Contact Us </p>
              </NavLink>
            </div>
          </div>
        </div>

        {/* //Head Office  */}

        <div className="">
          <p className="pb-3 font-medium text-white">HEAD OFFICE</p>
          <div className="flex gap-4">
            <FaMapMarkerAlt className="text-blue-secondary text-2xl" />
            <p>
              {" "}
              1401 N University Dr suite 503, Coral Springs, FL 33071, United
              State
            </p>
          </div>
          <div className=" space-y-4 text-gray-400">
            <div className="flex gap-4">
              <FaSquarePhone className="text-blue-secondary text-2xl " />
              <a href="tel:(+1) 954-272-8515" className="pt-1">
                {" "}
                (+1) 954-272-8515{" "}
              </a>
            </div>
            <p className="flex gap-4">
              <SiImessage className="text-blue-secondary text-2xl" />
              <a href="mailto:info@7kingscode.com">info@7kingscode.com</a>
            </p>

            <div className="flex gap-4 text-3xl md:text-2xl text-white">
              <a
                href="https://web.facebook.com/profile.php?id=100077385620343"
                target="_blank"
              >
                {" "}
                <FaSquareFacebook />
              </a>
              <a
                href="https://www.instagram.com/7kingscode/?hl=en"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/7-kings-code/"
                target="_blank"
              >
                {" "}
                <FaLinkedinIn />
              </a>
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
