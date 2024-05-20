import { NavLink } from "react-router-dom";
import banner from "../assets/images/banner3.jpg";
import bannerimg from "../assets/images/bannertop.png";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-primary h-screen  overflow-hidden ">
      <div className=" relative">
        <div
          className="z-10 absolute     right-0     bottom-0  "
          style={{ clipPath: " circle(60% at 100% 80%)" }}
        >
          <img src={banner} alt="" className="h-auto w-full object-cover" />
          <div className="absolute inset-0 bg-btn-primary     opacity-60 "></div>
        </div>
        <div className="      flex   justify-between w-[55%]  top-[10%] z-50 transition   duration-700 absolute left-[12%] lg:top-[15%]">
          <img src={bannerimg} alt="" />
          <div>
            <div className="p-10  hidden lg:block rounded-full bg-white text-black">
              <FaPlay className="text-xl" />
            </div>
          </div>
        </div>
        <div className=" flex  items-end bottom-52 relative h-screen">
          <div className="relative w-full">
            <div className="flex   gap-10  md:gap-20">
              <div className="w-[10%] "></div>
              <div className="uppercase absolute  z  w-[10%] top-[18%]  items-center  rotate-90    text-white font-semibold">
                <div className=" flex gap-10">
                  <p>FACEBook</p>
                  <p>Twitter</p>
                  <p>Instagram</p>
                </div>
              </div>
              <div className="w-full  space-y-8">
                <span className=" text-white p-2 px-4 bg-[#211f2e]">
                  SOLUTIONS FOR YOUR BUSINESSES
                </span>
                <div className="   uppercase relative   pt-10 z-40 w-full text-4xl lg:text-8xl font-bold text-white">
                  <span className="text-blue-secondary fade"> 7 kings code</span>{" "}
                  <br></br><p className="text-5xl"> elevating your IT Presence</p>
                </div>
                <div className="">
                  <button className="bg-blue-secondary px-12 py-5  text-white font-semibold">
                    {" "}
                    <NavLink> Disover More</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
