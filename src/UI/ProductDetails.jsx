/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiBuilding2Line } from "react-icons/ri";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import Slider from "react-slick";
const ProductDetails = () => {
  const [hover, setHover] = useState();

  const arr = [
    {
      title: "I-Card",
      desc: " A mobile application that scans card structures and divides them into text and image blocks, automatically populating contact fields within the app.",
      icon: <RiBuilding2Line />,
    },
    {
      title: "WholeSale EZ",
      desc: "Comprehensive services for buying, selling, and managing wholesale properties efficiently, ensuring seamless transactions and operations.",
      icon: <TbDeviceMobileCog />,
    },
    {
      title: "Jobs Shopper",
      desc: " The top platform for finding and posting job applications, offering a seamless and efficient experience for job seekers and employers.",
      icon: <GrShieldSecurity />,
    },
    {
      title: "Desi Mart",
      desc: "  Helping people worldwide bag their carts with bulk grocery pickup or delivery. Fast, convenient service delivered right to your doorstep.",
      icon: <GrShieldSecurity />,
    },
    {
      title: "EMT",
      desc: "Effortlessly track your time entries and access your pay stubs with just a click, ensuring accurate and efficient payroll management. ",
      icon: <GrShieldSecurity />,
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
        Our Products
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
                  className=" bg-white rounded-md text-black duration-700   h-72 lg:h-60 mx-6 border border-white hover:bg-blue-secondary
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

export default ProductDetails;
