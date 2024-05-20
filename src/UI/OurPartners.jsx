/* eslint-disable no-unused-vars */
import React from "react";
import image1 from "../assets/images/ibm_logo.jpg";
import image2 from "../assets/images/apex systems.jpg";
import image3 from "../assets/images/NEC.png";
import image4 from "../assets/images/Flydubai.png";
import image5 from "../assets/images/Artech.png";
import image6 from "../assets/images/infinite.jpg";
import image7 from "../assets/images/Collabera_logo.png";
import image8 from "../assets/images/kforce_logo.webp";
import image9 from "../assets/images/World_Fuel_Services_logo.png";
import image10 from "../assets/images/NSI-America.jpg";
import image11 from "../assets/images/rose international.jpg";
import image12 from "../assets/images/HCL.png";
import image13 from "../assets/images/juniper-networks.png";
import image14 from "../assets/images/jobsshopper.jpg";
import image15 from "../assets/images/national grid.png";
import image16 from "../assets/images/sunera tech.png";

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
    image15,
    image16,
  ];

  return (
    <div className="w-11/12 mx-auto">
      <div className="uppercase text-3xl text-blue-950 font-bold text-center pt-12">
        Our Partners
      </div>
      <div className="flex flex-wrap   items-center justify-center pt-8">
        {partners.map((image, index) => (
          <div
            key={index}
            className="m-4 w-[15%] hover:border border border-white hover:border-black p-4 transition-all duration-300  "
          >
            <img src={image} alt="partner" className=" h-auto w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
