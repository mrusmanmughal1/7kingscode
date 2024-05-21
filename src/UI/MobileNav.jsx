import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";
const MobileNav = ({mode}) => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="relative">
      <div className="  w-11/12 mx-auto flex justify-between items-center ">
        <Logo/> 
        <div className="flex px-4  md:px-0 items-center gap-4">
            
            {toggle ? (
              <p onClick={() => settoggle(!toggle)}>
                <RxCross1 className="text-bluecolor      text-2xl" />
              </p>
            ) : (
              <GiHamburgerMenu
                onClick={() => settoggle(!toggle)}
                className=" text-3xl text-bluecolor"
              />
            )}
          </div>
         {toggle &&  <nav className="absolute top-14 left-0 w-full bg-white z-[100] p-4">
              <ul
                onClick={() => settoggle(!toggle)}
                className={`flex  flex-col font-semibold  text-blue-700  w-full  md:max-h-fit  gap-12 md:gap-10 cursor-pointer    ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                <li className="header-li">
                  <a href="#main">What We Are</a>
                </li>
                <li className="header-li">
                  <a href="#about-me">What We Do </a>
                </li>
                <li className="header-li">
                  <a href="#skills">How We Do </a>
                </li>

                <li className="header-li">
                  <a href="#Projects">Contact Us </a>
                </li>
                <li className="header-li  ">
                  <a href="#Projects">Careers </a>
                </li>
              </ul>
            </nav>}
      </div>
    </div>
  )
}

export default MobileNav