import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";
const MobileNav = ({ mode }) => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="relative">
      <div className="  w-11/12 mx-auto flex justify-between items-center ">
        <NavLink to={"/"} href="#">
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
              onClick={() => settoggle(!toggle)}
              className={`flex  flex-col font-medium  text-black  w-full  md:max-h-fit  gap-4 md:gap-10 cursor-pointer    ${
                mode ? "text-white" : "text-black"
              }`}
            >
              <li className="header-li">
                <NavLink to={"/about-us"} href="#">
                  who we are{" "}
                </NavLink>
              </li>
              <hr />
              <li className="header-li">
                <NavLink to={"/services"} href="#">
                  What We Offer{" "}
                </NavLink>
              </li>
              <hr />

              <li className="header-li">
                <NavLink to={"/contact-us"} href="#">
                  Contact Us{" "}
                </NavLink>
              </li>
              <hr />
              <li className="header-li  ">
                <NavLink to={"/Careers"} href="#">
                  Careers{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
