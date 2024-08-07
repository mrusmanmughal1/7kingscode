import ClientLayout from "./Layout/ClientLayout";

const FooterBottom = () => {
  return (
    <div className="bg-[#151327] w-full ">
      <div className="w-11/12 md:w-4/5  text-sm mx-auto py-6 lg:py-[41px]  text-slate-300 font-semibold flex justify-between">
        <div className="  lg:w-auto text-center w-full">
          <p>7 Kings Code Software Solutions Pvt Ltd</p>
        </div>
        <div className=" lg:block  hidden text-center">
          <div className="flex gap-8">
            <p>Terms of Use </p>
            <p>Privacy Policy </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
