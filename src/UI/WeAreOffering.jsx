import { BiWorld } from "react-icons/bi";

const WeAreOffering = () => {
  const Services = [
    {
      title: "Website Development",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: <BiWorld />,
    },
    {
      title: "UI/UX Designing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: "",
    },
    {
      title: "Digital Marketing",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: "",
    },
    {
      title: "Data Analysis",
      desc: "Donec suscipit ante ipsum. Donec convallis quality torto",
      icon: "",
    },
  ];
  return (
    <div className="">
      <div className="whatweoffer px-[13rem] py-20 text-white">
        <div className="">
          <p className="text-blue-secondary font-medium">What We're Offering</p>
        </div>
        <div className="flex gap-32 space-y-4">
          <div className="w-full text-4xl font-semibold">
            We Provide Exclusive Service For Your Business{" "}
          </div>
          <div className="w-full text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. quis
            nostrud exercitation ullamco laboris
          </div>
        </div>
        <div className="flex container gap-8 pt-12">
          {Services.map((item, index) => (
            <div
              key={index}
              className=" bg-[#0F0C1D]  border border-white hover:bg-blue-secondary 
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeAreOffering;
