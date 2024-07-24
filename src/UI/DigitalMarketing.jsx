/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import digital from "../assets/Services/marketing.webp";
import a1 from "../assets/images/ai.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const DigitalMarketing = () => {
  return (
    <>
      <div className="flex  gap-44 mx-auto  ">
        <div className="    mx-auto ">
          <div className="flex lg:flex-row gap-24">
            {/* left  */}

            {/* right  */}
            <div className="w-full  flex flex-col gap-10 space-y-4 pb-16">
              <div className="w-full ">
                <img
                  className="hidden sm:block lg:block "
                  src={digital}
                  alt="UI Design"
                />
              </div>
              https://bitbucket.org/front-end-7kc/ecom-ahmad/src/main/
              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p>Digital Marketing</p>
                </div>
                <p>
                  In today’s digital age, a strong online presence is crucial.
                  Our digital marketing services are designed to boost your
                  brand visibility and drive traffic to your site. We craft
                  strategies that deliver tangible results and maximize ROI from
                  SEO and content marketing to social media and PPC campaigns
                </p>

                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Digital Marketing?
                </p>
                <p>
                  1. Customized Strategies We understand that every business is
                  unique. Our digital marketing experts develop customized
                  strategies to meet your specific goals, whether it's
                  increasing website traffic, generating leads, or building
                  brand awareness.
                </p>
                <p>
                  2. Data-Driven Approach Our strategies are backed by data and
                  analytics. We continuously monitor and analyze performance
                  metrics to optimize campaigns, ensuring maximum ROI and
                  effective resource allocation.
                </p>
                <p>
                  3. Expert Team Our team comprises experienced professionals
                  specializing in various aspects of digital marketing,
                  including SEO, content marketing, social media, PPC, and email
                  marketing. We bring a wealth of knowledge and expertise to
                  every project.
                </p>
                <p>
                  3. Expert Team Our team comprises experienced professionals
                  specializing in various aspects of digital marketing,
                  including SEO, content marketing, social media, PPC, and email
                  marketing. We bring a wealth of knowledge and expertise to
                  every project.
                </p>
                <p className="font-semibold">
                  Our Digital Marketing Services Include:
                </p>
                <p>
                  • Search Engine Optimization (SEO): Improve your website’s
                  visibility on search engines and attract organic traffic with
                  our advanced SEO techniques.
                </p>
                <p>
                  • Pay-Per-Click (PPC) Advertising: Drive immediate traffic and
                  conversions with targeted PPC campaigns on platforms like
                  Google Ads and social media.
                </p>
                <p>
                  • Social Media Marketing: Engage your audience and build a
                  strong online community with our effective social media
                  strategies on platforms like Facebook, Instagram, Twitter, and
                  LinkedIn.
                </p>
                <p>
                  • Content Marketing: Create and distribute valuable, relevant,
                  and consistent content to attract and retain a clearly defined
                  audience.
                </p>
                <p>
                  • Email Marketing: Reach your customers directly with
                  personalized email campaigns that drive engagement and sales.
                </p>
                <p>
                  • Analytics and Reporting: Track and analyze your marketing
                  performance with our comprehensive analytics and reporting
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
