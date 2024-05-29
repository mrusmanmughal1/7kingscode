import { BiWorld } from "react-icons/bi";
import Slider from "react-slick";

const WeAreOffering = () => {
  return (
    <div className="whatweoffer">
      <div className="   lg:w-4/5 mx-auto w-11/12    py-20 text-white">
        <div className="">
          <p className="text-blue-secondary font-medium">What We're Offering</p>
        </div>
        <div className="flex flex-col  pb-20 lg:flex-row gap-6 lg:gap-32 space-y-4">
          <div className="w-full text-4xl font-semibold">
            We Provide Exclusive Service For Your Business 
          </div>
          <div className="w-full text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. quis
            nostrud exercitation ullamco laboris
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
      title: "Website Development",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "UI/UX Designing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "Digital Marketing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "Data Analysis",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "Website Development",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "UI/UX Designing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "Digital Marketing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "Data Analysis",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
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
          </div>
        );
      })}
    </Slider>
  );
};
