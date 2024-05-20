import Logo from "../Components/Logo";
import { FaSquarePhone } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
const FooterMain = () => {
  return (
    <div className="bg-[#0f0c1d] ">
      <div className="w-3/4 text-white flex mx-auto py-20">
        <div className="space-y-4  ">
          <Logo />
          <p className="text-xs">
            {" "}
            Desires to obtain pain of itself, because it is pain, but
            occasionally circum
          </p>
          <div className=" space-y-4">
            <p className="flex gap-4">
              {" "}
              <FaSquarePhone /> +920000000000{" "}
            </p>
            <p className="flex gap-4">
              {" "}
              <SiImessage /> teczofficaila@gmail.com{" "}
            </p>
            <p className="flex gap-4">
              <FaMapMarkerAlt /> 27 Division St, Sans fransisco , USA{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="font-bold">Our Navigation</p>

          <a href="">About tecz</a>

          <a href="">Meet the Team</a>

          <a href="">News & Projects </a>

          <a href="">Contact</a>
        </div>

        <div className=""></div>
        <div className="">
          <p>Subscribe</p>
          <div className="border-b   bg-transparent  py-4">
            <input type="text" className="bg-transparent border-none" placeholder="Get News & Updates" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
