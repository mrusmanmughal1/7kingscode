const MainBanner = ({ url, text, title }) => {
  return (
    <div className=" h-40  overflow-hidden  relative main-top-banner flex  items-center bg-cover  ">
      <div className="absolute inset-0   opacity-60 "></div>
      <div className="text-2xl absolute    font-bold text-white ps-[15rem] ">
        <p className="bg-[#3B3A42] p-2">{title}</p>
        <p className="text-4xl leading-loose">{text}</p>
      </div>
    </div>
  );
};

export default MainBanner;
