/* eslint-disable no-unused-vars */
import React from "react";
import image1 from "../assets/images/slider/1.png";
import image2 from "../assets/images/slider/2.png";
import image3 from "../assets/images/slider/3.png";
import image4 from "../assets/images/slider/4.png";
import image5 from "../assets/images/slider/5.png";
import image6 from "../assets/images/slider/6.png";
import image7 from "../assets/images/slider/7.png";
import image8 from "../assets/images/slider/8.png";
import image9 from "../assets/images/slider/9.png";
import image10 from "../assets/images/slider/10.png";
import image11 from "../assets/images/slider/11.png";
import image12 from "../assets/images/slider/12.png";
import image13 from "../assets/images/slider/13.png";
import image14 from "../assets/images/slider/14.png";
// import image15 from "../assets/images/slider/15.png";
// import image16 from "../assets/images/slider/16.png";

const OurPartners = () => {
  const partners = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,

    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,

    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];

  return (
    <div className="w-full   mx-auto  bg-slate-50 py-20 ">
      <div className="uppercase text-3xl text-blue-950 font-bold text-center py-12">
        Our Partners
      </div>
      <div className="slider ">
        <div className="slide-track">
          {partners.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt="partner" className="  " />
            </div>
          ))}
        </div>
      </div>
      <div className="slider2 ">
        <div className="slide-track2">
          {partners.map((image, index) => (
            <div key={index} className="slide2">
              <img src={image} alt="partner" className="  " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
