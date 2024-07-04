/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiBuilding2Line } from "react-icons/ri";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa6";
import Slider from "react-slick";
import { MdHealthAndSafety } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
const BestSolution = () => {
  const [hover, setHover] = useState();

  const arr = [
    {
      title: "Telecommunications",
      desc: " Advanced solutions to enhance connectivity and communication across networks.",
      icon: <FaHeadphonesAlt />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
      title: " Real Estate",
      desc: "Comprehensive services for buying, selling, and managing properties efficiently..",
      icon: <BsFillBuildingsFill />,
      link: "/service/TalentAquisition",
    },
    {
      title: "Finance and Banking",
      desc: " Innovative solutions to optimize financial operations and banking services. ",
      icon: <FaBitcoin />,
      link: "/service/ManageConsult",
    },
    {
      title: "Health Care",
      desc: " Comprehensive services to enhance patient care and operational efficiency in healthcare settings.",
      icon: <MdHealthAndSafety />,
      link: "/service/ManageConsult",
    },
    {
      title: "Education",
      desc: "Tailored solutions to foster learning and development through innovative educational practices. ",
      icon: <GiBookCover />,
      link: "/service/ManageConsult",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="businessGrowth    ">
      <div className=" pt-20  text-blue-secondary   pb-8 text-3xl w-[75%] mx-auto  capitalize font-semibold  ">
        Industries We Serve at 7KC
      </div>
      <div className="  w-[80%]   pb-20  mx-auto">
        <Slider {...settings}>
          {arr.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <NavLink key={index} to={item.link}>
                <div
                  className=" bg-white rounded-md text-black duration-700   h-48 mx-4 border border-white hover:bg-blue-secondary
            shadow-lg space-y-2   hover:text-white leading-6 px-8 py-8"
                >
                  <div className="flex justify-between">
                    <p className="font-bold text-xl">{item.title}</p>
                    <p
                      className={`text-5xl text-blue-secondary relative    -top-4 best-icon  ${
                        hover == index && "text-white"
                      } `}
                    >
                      {item.icon}
                    </p>
                  </div>
                  <p className={``}>{item.desc}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSolution;
