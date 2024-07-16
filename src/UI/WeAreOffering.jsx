import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const WeAreOffering = () => {
  return (
    <div className="whatweoffer">
      <div className="   lg:w-4/5 mx-auto w-11/12     py-20 text-white">
        <div className="">
          <p className="text-blue-secondary font-medium">What We're Offering</p>
        </div>
        <div className="flex flex-col  pb-20 lg:flex-row gap-6 lg:gap-32 space-y-4">
          <div className="w-full text-4xl font-semibold">
            We Provide Exclusive Service For Your Business
          </div>
        </div>
        <div className="mx-auto">
          <AllServices />
        </div>
      </div>
    </div>
  );
};
export default WeAreOffering;
export const AllServices = () => {
  const Services = [
    {
      title: "Onshore and Offshore Team",
      desc: "At 7 Kings Code, we offer robust onshore and offshore team solutions designed to...",
      icon: <BiWorld />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
      title: "Talent Acquisition/Visa Sponsorship",
      desc: "Finding the right talent can be challenging. Our talent talent acquisition services are ...",
      icon: <BiWorld />,
      link: "/service/TalentAquisition",
    },
    {
      title: " Management Consulting",
      desc: "Navigate complex business challenges with confidence. Our management consultants ...",
      icon: <BiWorld />,
      link: "/service/ManageConsult",
    },

    {
      title: "Website Development",
      desc: "Your website is your digital storefront. Our website development services ensure that you ...",
      icon: <BiWorld />,
      link: "/service/WebDevelopment",
    },
    {
      title: "UI/UX Designing",
      desc: "User experience is at the heart of digital success. Our UI/UX designing services focus ...",
      icon: <BiWorld />,
      link: "/service/UXDesigner",
    },
    {
      title: "Digital Marketing",
      desc: "In today’s digital age, a strong online presence is crucial. Our digital marketing services are ...",
      icon: <BiWorld />,
      link: "/service/DigitalMarketing",
    },
    {
      title: "Security Services",
      desc: "Protect your organization from cyber threats with robust cybersecurity management solutions ...",
      icon: <BiWorld />,
      link: "/service/CyberSecurityManage#cybersecurity",
    },
  ];
  const settings = {
    dots: true,
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
    <Slider {...settings}>
      {Services.map((item, i) => {
        console.log(i);
        return (
          <div key={i} className="     ">
            <NavLink to={item.link}>
              <div
                className=" bg-[#0F0C1D]  mx-10 border border-white hover:bg-blue-secondary
              shadow-md space-y-3 text-white hover:text-white leading-6 px-8 py-8"
              >
                <div className="text-6xl flex justify-center">
                  <p>{item.icon}</p>
                </div>
                <div className=" items-center font-medium  w-full text-center  ">
                  <p>{item.title} </p>
                </div>
                <div>
                  <p className="text-gray-400 text-center text-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </Slider>
  );
};
