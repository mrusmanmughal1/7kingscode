import { useState } from "react";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";

const HeaderMain = ({ mode }) => {
  const [isSticky, setIsSticky] = useState();
  const [hover, sethover] = useState();

  const services = [
    "usman",
    " ilyas ",
    " Mughal ",
    "usman",
    " ilyas ",
    " Mughal ",
    "usman",
    " ilyas ",
    " Mughal ",
  ];
  return (
    <header className={` relative  main    mx-auto    md:bg-white `}>
      <div className="relative  lg:w-11/12 md:w-9/12 mx-auto flex items-center justify-around">
        <div className="flex   relative   items-center justify-between  w-full  py-2 ">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
          <div
            className={`   flex capitalize  bg-white w-full top-16  p-4 md:top-0   md:relative  z-50   md:flex-row justify-between md:justify-center  md:items-center py-5     `}
          >
            <nav className="">
              <ul
                className={`flex md:flex-row flex-col font-thin   text-blue-700  w-full md:text-center md:max-h-fit  gap-12 md:gap-10 cursor-pointer     `}
              >
                <li className="header-li hover:font-medium ">
                  <a href="#">What We do </a>
                  {/* Services */}
                </li>
                <li className="header-li hover:font-medium">
                  <a href="#">who we are </a>
                  {/* about us 
                  leader ship */}
                </li>
                <li
                  className="header-li hover:font-medium relative "
                  onMouseOver={() => sethover(true)}
                  onMouseLeave={() => sethover(false)}
                >
                  <a href="#">Services </a>
                </li>

                <li className="header-li hover:font-medium">
                  <a href="#">Contact Us </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex px-4   md:px-0 items-center ">
            <NavLink
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3        capitalize  md:px-8 md:py-3  text-white    hover:bg-black   bg-blue-secondary transition-all duration-700 rounded-md bg-bluecolor cursor-pointer font-medium"
            >
              Careers{" "}
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`${
          hover ? " block" : "hidden "
        }  absolute     w-full z-[999]`}
      >
        <div
          className={`${
            hover && " opacity-100"
          }   "opacity-0 bg-white   opacity-70 transition-all  duration-1000   "`}
        >
          <div className="flex gap-8">
            {services.map((val, i) => (
              <p key={i} className="font-medium  ">
                {val}
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
