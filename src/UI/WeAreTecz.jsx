import a1 from "../assets/images/ai1.png";
import a2 from "../assets/images/ai2.png";
import a3 from "../assets/images/ai.png";
import { AiFillSetting } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import DMOre from "./DMOre";
const WeAreTecz = () => {
  return (
    <div>
      <div className=" w-11/12 md:w-4/5 2xl:w-3/4 mx-auto">
        <div className="flex  lg:flex-row flex-col  gap-x-32 gap-y-10 md:gap-y-0  justify-center items-center py-20 lg:py-32">
          {/* 1st section  */}
          <div className="relative w-full   ">
            <img className="px-20 hidden lg:block  pb-4" src={a1} />
            <img
              className="  absolute   hidden md:block left-64  lg:left-60  top-0"
              src={a2}
            />
            <div className="flex items-end justify-center items md:justify-start gap-10 ">
              <img className="  " src={a3} />
              <div className=" hidden md:block">
                <p className="font-bold text-6xl ">10</p>
                <div className=" uppercase font-semibold ">
                  <p>Years of</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Section  */}
          <div className=" w-full   py-4 ">
            <div className="">
              <ol>
                <li className="text-blue-secondary font-bold">
                  We Are 7 Kings Code
                </li>
              </ol>
            </div>
            <div className="flex flex-col ">
              <div className="text-4xl font-semibold py-5">
                We ‘re Partner of Your Innovation
              </div>
              <div className=" text-slate-400 pb-4">
                At 7 kings Code,we understand that innovation drives
                success.That’s why we’re more than just a service provider we’re
                your partners in innovation.Our commitment to excellence and
                dedication to your vision sets us apart ensuring that your
                projects reach their full potential
              </div>
            </div>
            <div className=" space-y-4">
              <div className="flex gap-4">
                <div className="">
                  <FiTarget className="text-4xl text-blue-secondary" />
                </div>
                <div className=" space-y-1 w-96">
                  <p className="text-lg font-semibold ">Our Mission</p>
                  <p className="text-gray-400">
                    Our mission drives us to continuously strive for excellence
                    and innovation in everything we do.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4">
                <div className="">
                  <AiFillSetting className="text-4xl text-blue-secondary" />
                </div>
                <div className=" space-y-1 w-96">
                  <div className="font-semibold text-lg  ">Our Vision</div>

                  <p className="text-gray-400">
                    We are committed to supporting our clients and partners in
                    achieving their goals, no matter the challenges
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <DMOre />
                <div className="flex  items-center gap-2">
                  <div className="">
                    <img src="https://data.themeim.com/wp/tecz/wp-content/uploads/2023/09/avatar-1.png" />
                  </div>{" "}
                  <div className="">
                    <p className="font-semibold">Abdul Ismail</p>
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
