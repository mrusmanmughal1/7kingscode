import a1 from "../assets/images/ai1.png";
import a2 from "../assets/images/ai2.jpg";
import a3 from "../assets/images/ai.jpg";
import { RiPrinterCloudFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import DMOre from "./DMOre";
const WeAreTecz = () => {
  return (
    <div>
      <div className=" w-11/12 md:w-3/4 mx-auto">
        <div className="flex  lg:flex-row flex-col  gap-x-32  justify-center items-center py-20 lg:py-32">
          {/* 1st section  */}
          <div className="relative w-full   space-y-6">
            <img className="px-20 hidden lg:block " src={a1} />
            <img
              className="  absolute   hidden md:block left-64  lg:left-52  -top-8 lg:-top-2 "
              src={a2}
            />
            <div className="flex items-end justify-center md:justify-start gap-10 ">
              <img className="  " src={a3} />
              <div className=" hidden md:block">
                <p className="font-bold text-8xl ">10</p>
                <div className=" uppercase font-semibold pb-8">
                  <p>Years of</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Section  */}
          <div className=" w-full   py-14 ">
            <div className="">
              <ol>
                <li className="text-blue-secondary font-bold">
                  Hey! We Are Tecz
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-4xl font-semibold py-5">
                We Always Try to Give Smart Solution For Business
              </div>
              <div className=" text-slate-400 pb-8">
                System is a term used to refer to an organized collection
                symbols and processes that may be used to operate on such
                symbols. Perspiciatis omnis natus error voupems accusa
              </div>
            </div>
            <div className=" space-y-4">
              <div className="flex gap-4">
                <div className="">
                  <RiPrinterCloudFill className="text-4xl text-blue-secondary" />
                </div>
                <div className=" space-y-1 w-96">
                  <p className="text-lg font-semibold ">Cloud Based</p>
                  <p className="text-gray-400">
                    There are many variations of available but the majority have
                    suffered alteration
                  </p>
                </div>
              </div>
              <div className=" flex gap-4">
                <div className="">
                  <AiFillSetting className="text-4xl text-blue-secondary" />
                </div>
                <div className=" space-y-1 w-96">
                  <div className="font-semibold text-lg  ">
                    Technical Support
                  </div>

                  <p className="text-gray-400">
                    There are many variations of available but the majority have
                    suffered alteration
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <DMOre/>
                <div className="flex  items-center gap-2">
                  <div className="">
                    <img src="https://data.themeim.com/wp/tecz/wp-content/uploads/2023/09/avatar-1.png" />
                  </div>{" "}
                  <div className="">
                    <p className="font-semibold">Usman</p>
                    <p>CEO FOUNDER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreTecz;
