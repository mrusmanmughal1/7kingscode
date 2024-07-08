import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";

import { MdOutlineArrowDropDown } from "react-icons/md";

const MobileNav = ({ mode }) => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="relative">
      <div className="  w-11/12 mx-auto flex justify-between items-center ">
        <NavLink to={"/"}  >
          <Logo />
        </NavLink>
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
        {toggle && (
          <nav className="mobile-nav absolute top-16 left-100 w-full bg-white z-[100] p-4 animate-slideIn h-screen">
            <ul
              className={`flex  flex-col font-medium  text-black  w-full  md:max-h-fit  gap-4 md:gap-10 cursor-pointer    ${
                mode ? "text-white" : "text-black"
              }`}
            >
              <li className="header-li" onClick={() => settoggle(!toggle)}>
                <NavLink to={"/"}  >
                  What We Do{" "}
                </NavLink>
              </li>
              <hr />
              <li className="header-li" onClick={() => settoggle(!toggle)}>
                <NavLink to={"/about-us"}  >
                  Who We Are{" "}
                </NavLink>
              </li>
              <hr />
              <li className="header-li">
               
                <div className="   text-black border-b">
                  <div className="relative w-full  overflow-hidden">
                    <input
                      type="checkbox"
                      className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className="bg-white w-full  justify-between  flex items-center pe-4 pb-4">
                      <li className="      text-btn-primary">What We Offer</li>
                      <MdOutlineArrowDropDown className="text-3xl" />
                    </div>
                    <div className=" absolute  top-3 right-3 text-white transition-transform duration-500 rotate-90 peer-checked:rotate-180 "></div>
                    <div className=" bg-white overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-40 ">
                      <div className="px-4 pb-2">
                        <li
                          className="header-li "
                          onClick={() => settoggle(!toggle)}
                        >
                          <NavLink to={"/services"}  >
                            Services
                          </NavLink>
                        </li>
                        <li
                          className="header-li py-2"
                          onClick={() => settoggle(!toggle)}
                        >
                          <NavLink to={"/products"}  >
                            Products
                          </NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="header-li" onClick={() => settoggle(!toggle)}>
                <NavLink to={"/contact-us"}  >
                  Contact Us{" "}
                </NavLink>
              </li>
              <hr />
              <div>
                <button
                  className="bg-blue-secondary text-white rounded-lg text-center px-8 py-3 "
                  onClick={() => settoggle(!toggle)}
                >
                  <NavLink to={"/Careers"}  >
                    Careers{" "}
                  </NavLink>
                </button>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
