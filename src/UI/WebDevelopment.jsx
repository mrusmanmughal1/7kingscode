/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "./MainBanner";
import UI from "../assets/images/UI.webp";
import a1 from "../assets/images/ai.png";
import developement from "../assets/Services/webdevelopment.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocation, IoMail } from "react-icons/io5";

const CloudService = () => {
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
                  className="hidden w-full h-[550px] sm:block lg:block "
                  src={developement}
                  alt="UI Design"
                />
              </div>

              <div className="text-justify space-y-4">
                <div className="text-2xl font-semibold text-blue-secondary">
                  <p>Web Development</p>
                </div>
                <p>
                  Your website is your digital storefront. Our website
                  development services ensure that you have a powerful online
                  presence that attracts, engages, and converts visitors. From
                  responsive designs to robust functionalities, we build
                  websites that are scalable, secure, and optimized for
                  performance
                </p>
                <p className="text-xl font-semibold">
                  Why Choose 7Kings Code for Web Development?
                </p>
                <p>
                  1. Customized Solutions Every business is unique, and so are
                  its web development needs. We offer tailored solutions that
                  align with your specific requirements, ensuring a perfect fit
                  for your brand and objectives.
                </p>
                <p>
                  2. Experienced Team Our team of expert developers brings years
                  of experience and technical expertise to every project. We
                  stay updated with the latest trends and technologies to
                  deliver modern and efficient websites.
                </p>
                <p>
                  3. User-Centric Design We prioritize user experience (UX) and
                  user interface (UI) design to create websites that are not
                  only visually appealing but also intuitive and easy to
                  navigate, enhancing user satisfaction and engagement.
                </p>
                <p>
                  4. Scalable and Secure Our web development solutions are
                  designed to grow with your business. We build scalable and
                  secure websites that can handle increasing traffic and data
                  securely, ensuring long-term success.
                </p>
                <p className="font-semibold">
                  Our Web Development Services Include:
                </p>
                <p>
                  • Custom Website Development: Get a website that reflects your
                  brand’s identity and meets your specific business needs with
                  our custom development services.
                </p>
                <p>
                  • E-commerce Development: Boost your online sales with a
                  robust and secure e-commerce platform that provides a seamless
                  shopping experience for your customers.
                </p>
                <p>
                  • Content Management Systems (CMS): Manage your website
                  content effortlessly with our CMS development services,
                  including WordPress, Drupal, and Joomla.
                </p>
                <p>
                  • Responsive Web Design: Ensure your website looks and
                  performs flawlessly across all devices with our responsive web
                  design services.
                </p>
                <p>
                  • Web Application Development: Enhance your business
                  operations with our custom web applications tailored to your
                  specific requirements.
                </p>
                <p>
                  • Maintenance and Support: Keep your website running smoothly
                  with our ongoing maintenance and support services, ensuring
                  optimal performance and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudService;
