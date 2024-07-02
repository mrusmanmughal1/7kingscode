import banner from "../assets/images/banner3.jpg";
import bannerimg from "../assets/images/bannertop.png";
import { FaPlay } from "react-icons/fa";
import DMOre from "./DMOre";
import { useTypewriter } from "react-simple-typewriter";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["7 KINGS CODE", "7 KINGS CODE", " 7 KINGS CODE"],
    loop: {},
  });
  return (
    <div className="bg-primary h-screen  overflow-hidden ">
      <div className=" relative">
        <div
          className="z-10 absolute hidden lg:block  right-0     bottom-0 "
          style={{ clipPath: " circle(65% at 100% 85%)" }}
        >
          <div className="relative">
            <img
              src={banner}
              alt=""
              className="relative left-64 top-52 2xl:top-0 w-full  object-contain object-bottom "
            />

            <div className="absolute inset-0 bg-[#4043ff] mix-blend-[#3f4fff] z-20 h-full  w-full   opacity-60 "></div>
          </div>
        </div>
        <div className="       flex   justify-between  w-[45%] 2xl:w-[45%]   z-50 transition   duration-700 absolute left-[12%] top-[10%]  2xl:top-[15%]">
          <img src={bannerimg} alt="" className="fadeimg hidden lg:block" />
        </div>
        <div className=" flex  items-end bottom-64 lg:bottom-28  2xl:bottom-44 relative h-screen">
          <div className="relative w-full">
            <div className=" ps-10 lg:ps-20 2xl:ps-36    gap-7   md:gap-20">
              <div className="w-full  space-y-8">
                <span className=" text-white p-2 px-4 text-xs md:text-base  uppercase bg-[#211f2e]">
                  NEVER STOP, NEVER GIVE UP, ALWAYS FIND SOLUTION.
                </span>
                <div className="   uppercase relative   pt- z-40 w-full  font-bold text-white">
                  <span
                    id="typewriter"
                    className="text-blue-secondary fade text-5xl md:text-7xl 2xl:text-8xl"
                  >
                    {text}
                  </span>
                  <br></br>
                  <p className=" text-2xl 2xl:text-5xl"> elevating your </p>
                  <p className="text-4xl md:text-6xl 2xl:text-8xl">
                    {" "}
                    IT Presence
                  </p>
                </div>
                <DMOre to={"/about-us"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
