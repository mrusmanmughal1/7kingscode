/* eslint-disable no-unused-vars */
import { CiBank } from "react-icons/ci";
import { IoBusinessSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { RiBuilding2Line } from "react-icons/ri";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import Slider from "react-slick";
import { useState } from "react";

const Whitslider = () => {
  const [hover, setHover] = useState(null);

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
  const val = [
    {
      title: "Infrastructure Management",
      desc: "Ensuring robust, efficient, and scalable IT infrastructure for seamless operations.",
      icon: <RiBuilding2Line />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
      title: " Application Management",
      desc: " End-to-end services for optimizing, maintaining, and supporting your software applications..",
      icon: <TbDeviceMobileCog />,
      link: "/service/TalentAquisition",
    },
    {
      title: "Security Services",
      desc: "Comprehensive protection solutions to safeguard your assets and data. ",
      icon: <GrShieldSecurity />,
      link: "/service/ManageConsult",
    },
    {
      title: "OFF-SHORE & ON-SHORE TEAMS",
      desc: " Seamlessly integrated global and local teams ensuring round-the-clock productivity and expertise.",
      icon: <CiBank />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
      title: "TALENT ACQUISITION & VISA SPONSORSHIP",
      desc: " Streamlined recruitment and visa processes to attract top global talent.",
      icon: <IoBusinessSharp />,
      link: "/service/TalentAquisition",
    },
    {
      title: "MANAGEMENT CONSULTING",
      desc: "Expert guidance to drive strategic growth and operational excellence. ",
      icon: <GrUserManager />,
      link: "/service/ManageConsult",
    },
  ];

  return (
    <div className="businessGrowth py-20">
      <div className="    mx-auto w-[80%]">
        <Slider {...settings}>
          {val.map((item, index) => (
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
                    <p className="font-bold">{item.title}</p>
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

export default Whitslider;
