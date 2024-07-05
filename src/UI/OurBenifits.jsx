import { FaCheck } from "react-icons/fa";
import b1 from "../assets/images/benifits-1.jpg";
import ceo from "../assets/images/CEO.png";
import { RxRocket } from "react-icons/rx";
import { AiOutlinePhone } from "react-icons/ai";
const WeAreTecz = () => {
  return (
    <div className="">
      <div className="w-full md:w-11/12 lg:w-3/4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center   py-10 lg:py-32">
          {/* 1st section */}
          <div
            className="relative w-11/12 mx-auto
           lg:w-1/2 mb-10 lg:mb-0"
          >
            {/* <img
              className="absolute left-0 lg:left-52 bottom-0 hidden md:block"
              src={b2}
              alt="Benefits"
            /> */}
            <div className="flex items-end gap-4 lg:gap-10">
              <img src={b1} alt="Benefits" className="w-full" />
            </div>
          </div>
          {/* 2nd Section */}
          <div className="w-full lg:w-3/4 px-6 lg:px-24 py-6 lg:py-8">
            <div className="mb-4 lg:mb-1">
              <ol>
                <li className="text-blue-secondary text-lg font-bold">
                  7 Kings Code
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl md:text-2xl font-semibold py-2">
                Revolutionizing businesses with technology
              </div>
              <div className="text-slate-400 pb-8">
                7 Kings Code is a leading IT consulting firm serving partners
                and clients globally, including the USA, Canada, Europe, India,
                Pakistan, and the Middle East. We source top-tier consultants
                who offer our clients a competitive edge in the market. Our
                steadfast commitment to client success has enabled our expanding
                team of professionals to place exceptional consultants in
                thousands of diverse roles.
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex ">
                <div>{/* <RxRocket className="text-4xl text-black" /> */}</div>
                <div className="space-y-1 w-full lg:w-96">
                  <p className="text-blue-secondary  text-lg font-semibold">
                    " EXECUTION IS THE START OF THE RACE, NOT THE FINISHING LINE
                    ”.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <a href="https://ismailceo.com/" target="_blank">
                  <button className="bg-blue-secondary px-4 py-3 text-medium text-white">
                    Discover More
                  </button>
                </a>
                <div className="flex items-center gap-2">
                  <img className="w-12 rounded-full" src={ceo} alt="CEO" />
                  <div>
                    <p className="font-semibold">MR. ISMAIL</p>
                    <p>CEO & PRESIDENT</p>
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
