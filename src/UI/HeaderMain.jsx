import { useState } from "react";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";

const HeaderMain = ({ mode }) => {
  const [toggle, settoggle] = useState(false);

  const [isSticky, setIsSticky] = useState();
  return (
    <header className={` relative  main    mx-auto md:px-5  md:bg-white `}>
      <div className="relative  lg:w-11/12 md:w-9/12 mx-auto flex items-center justify-around">
        <div className="flex   relative   items-center justify-between  w-full  py-2 ">
          <Logo />
          <div
            className={` ${
              toggle && "hidden"
            } flex capitalize  bg-white w-full top-16  p-4 md:top-0   md:relative  z-50   md:flex-row justify-between md:justify-center  md:items-center py-5     `}
          >
            <nav className="">
              <ul
                onClick={() => settoggle(!toggle)}
                className={`flex md:flex-row flex-col font-medium  text-blue-700  w-full md:text-center md:max-h-fit  gap-12 md:gap-10 cursor-pointer    ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                <li className="header-li">
                  <a href="#main">What We do </a>
                  {/* Services */}
                </li>
                <li className="header-li">
                  <a href="#about-me">who we are </a>
                  {/* about us 
                  leader ship */}
                </li>
                <li className="header-li">
                  <a href="#skills">Newsroom </a>
                </li>

                <li className="header-li">
                  <a href="#Projects">Contact Us </a>
                </li>
                <li className="header-li  ">
                  <a href="#Projects">Careers </a>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="flex px-4   md:px-0items-center gap-4">
            <NavLink
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3        capitalize  md:px-8 md:py-3  text-white    hover:bg-black   bg-blue-secondary transition-all duration-700 rounded-md bg-bluecolor cursor-pointer font-semibold"
            >
              Careers{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
