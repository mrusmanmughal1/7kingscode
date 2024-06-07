import { FaCheck } from "react-icons/fa";
import b1 from "../assets/images/benifits-1.jpg";
import b2 from "../assets/images/benifits-2.jpg";
import { RxRocket } from "react-icons/rx";
import { AiOutlinePhone } from "react-icons/ai";

const WeAreTecz = () => {
  return (
    <div className="p-4 md:p-16">
      <div className="w-full md:w-11/12 lg:w-3/4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center py-10 lg:py-16">
          {/* 1st section */}
          <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              className="absolute left-0 lg:left-52 bottom-0 hidden md:block"
              src={b2}
              alt="Benefits"
            />
            <div className="flex items-end gap-4 lg:gap-10">
              <img src={b1} alt="Benefits" />
            </div>
            <div className="absolute -bottom-6 lg:-bottom-10 left-4 sm:left-10 bg-white flex gap-4 lg:gap-8 px-4 lg:px-10 py-2 lg:py-5 border shadow-md">
              <AiOutlinePhone className="bg-gray-300 font-bold text-3xl rounded-full justify-center">
                Call
              </AiOutlinePhone>
              <div className="capitalize font-semibold">
                <p>Call Anytime</p>
                <p>+9026505050</p>
              </div>
            </div>
          </div>
          {/* 2nd Section */}
          <div className="w-full lg:w-1/2 lg:px-24 py-6 lg:py-14">
            <div className="mb-4 lg:mb-8">
              <ol>
                <li className="text-blue-secondary font-bold">
                  Check Our Benefits
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl md:text-4xl font-semibold py-5">
                We're Partner of Your Innovations
              </div>
              <div className="text-slate-400 pb-8">
                System is a term used to refer to an organized collection
                symbols and processes that may be used to operate on such
                symbols. Perspiciatis omnis natus error voupems accusa
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div>
                  <RxRocket className="text-4xl text-black" />
                </div>
                <div className="space-y-1 w-full lg:w-96">
                  <p className="text-blue-500 font-semibold">
                    Lorem ipsum is simply free text dolor sit am adipi we daily
                    ipsum
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaCheck className="text-xl rounded-full border-2 border-black text-black" />
                </div>
                <div className="space-y-1 w-full lg:w-96">
                  <p className="text-black">Perspiciatis omnis natus error</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <FaCheck className="text-xl rounded-full border-2 border-black text-black" />
                </div>
                <div className="space-y-1 w-full lg:w-96">
                  <p className="text-black">Donec gravida imperdie</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <button className="bg-blue-secondary px-8 py-4 text-white">
                  Discover More
                </button>
                <div className="flex items-center gap-2">
                  <img
                    src="https://data.themeim.com/wp/tecz/wp-content/uploads/2023/09/avatar-1.png"
                    alt="CEO"
                  />
                  <div>
                    <p className="font-semibold">Sohaib</p>
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
