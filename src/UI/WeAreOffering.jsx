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
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/OnShoreOffShoreTeam",
    },
    {
      title: "Talent Acquisition and Visa Sponsorship",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/TalentAquisition",
    },
    {
      title: " Management Consulting",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/ManageConsult",
    },
    {
      title: "Data Analysis",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/DataAnalysis",
    },
    {
      title: "Website Development",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/WebDevelopment",
    },
    {
      title: "UI/UX Designing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/UXDesigner",
    },
    {
      title: "Digital Marketing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/DigitalMarketing",
    },
    {
      title: "Business Intelligence",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
      link: "/service/BusinessIntelligence",
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
                  <p className="text-gray-700 text-xs">{item.desc}</p>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </Slider>
  );
};
