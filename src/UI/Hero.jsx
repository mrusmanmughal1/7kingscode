import { NavLink } from "react-router-dom";
import banner from "../assets/images/banner3.jpg";
import bannerimg from "../assets/images/bannertop.png";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-primary h-screen relative">
      <div className="      flex   justify-between w-[55%]  z-50 transition   duration-700 absolute left-[12%] top-[15%]">
        <img src={bannerimg} alt="" />
        <div>
          <div className="p-10  rounded-full bg-white text-black">
            <FaPlay  className="text-xl"/>
          </div>
        </div>
      </div>
      <div className=" flex  items-end bottom-52 relative h-screen">
        <div className="relative w-full">
          <div className="flex   gap-20">
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
              <div className="   relative  z-40 w-full text-8xl font-bold text-white">
                <span className="text-blue-secondary">INNO</span>VATING{" "}
                <br></br> TECH SOLUTION
              </div>
              <div className="">
                <button className="bg-blue-secondary px-12 py-5  text-white font-semibold">
                  {" "}
                  <NavLink> Disover More</NavLink>
                </button>
              </div>
            </div>
            <div
              className="z-10 absolute   bottom-0 left-[43%] "
              style={{ clipPath: " circle(87% at 100% 81%)" }}
            >
              <img src={banner} alt="" />
              <div className="absolute inset-0 bg-btn-primary  opacity-60 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
