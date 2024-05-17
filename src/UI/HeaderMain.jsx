import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";

const HeaderMain = ({ mode }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <header className={`      mx-auto px-5  md:bg-white `}>
      <div className=" w-9/12 mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between  w-full  py-2 ">
          <Logo />
          <div className="flex capitalize   md:flex-row justify-between   md:items-center py-5   md:bg-transparent ">
            <nav className="">
              <ul
                onClick={() => settoggle(!toggle)}
                className={`flex md:flex-row flex-col font-semibold  text-blue-700  w-full text-center md:max-h-fit  gap-12 md:gap-10 cursor-pointer    ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                <li className="header-li">
                  <a href="#main">Home</a>
                </li>
                <li className="header-li">
                  <a href="#about-me">Servies</a>
                </li>
                <li className="header-li">
                  <a href="#skills">Contact us </a>
                </li>

                <li className="header-li">
                  <a href="#Projects">About us </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex  items-center gap-4">
            <NavLink
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3    capitalize  md:px-8 md:py-3  text-white      bg-blue-700 transition-all duration-700 rounded-md bg-bluecolor cursor-pointer font-semibold"
            >
              Careers{" "}
            </NavLink>
            {toggle ? (
              <p onClick={() => settoggle(!toggle)}>
                <RxCross1 className="text-bluecolor  md:hidden block text-2xl" />
              </p>
            ) : (
              <GiHamburgerMenu
                onClick={() => settoggle(!toggle)}
                className="md:hidden text-3xl text-bluecolor"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
