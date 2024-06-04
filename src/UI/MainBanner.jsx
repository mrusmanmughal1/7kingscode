const MainBanner = ({ url, text, title }) => {
  return (
    <div className=" h-40  overflow-hidden  relative main-top-banner flex  items-center bg-cover  ">
      <div className="absolute inset-0   opacity-60 "></div>
      <div className="text-2xl absolute  space-y-3  p-5  font-bold text-white md:ps-[10rem] lg:ps-[13rem]   ">
        <p className="bg-[#3B3A42]/60 text-sm  md:text-2xl  2xl:text-3xl  p-2">
          {title}
        </p>
        <p className="  leading-loose text-4xl md:text-2xl  2xl:text-5xl ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
