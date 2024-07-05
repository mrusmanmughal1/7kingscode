import a1 from "../assets/images/ai1.png";
import a2 from "../assets/images/ai2.png";
import a3 from "../assets/images/ai.png";
import { AiFillSetting } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { AiOutlineSlack } from "react-icons/ai";
import DMOre from "./DMOre";
const WeAreTecz = () => {
  return (
    <div>
      <div className=" w-11/12 md:w-4/5 2xl:w-3/4 mx-auto">
        <div className="flex  lg:flex-row flex-col  gap-x-20 gap-y-10 md:gap-y-0  justify-center items-center py-20 lg:py-32">
          {/* 1st section  */}
          <div className="relative w-full   ">
            <img className="px-20 hidden lg:block  pb-4" src={a1} />
            <img
              className="  absolute   hidden md:block left-64  lg:left-60  top-0"
              src={a2}
            />
            <div className="flex items-end justify-center items md:justify-start gap-10 ">
              <img className="w-full lg:w-auto " src={a3} />
              <div className=" hidden md:block">
                <p className="font-bold text-6xl ">10+</p>
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
                projects reach their full potential.
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
<<<<<<< HEAD
                  Never Stop, Never Give Up, Always Find Solution.
=======
                    Never Stop, Never Give Up, Always Find Solution.
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
                  </p>
                </div>
              </div>
              <div className=" flex gap-4">
                <div className="">
                  <AiOutlineSlack className="text-4xl text-blue-secondary" />
                </div>
                <div className=" space-y-1 w-96">
                  <div className="font-semibold text-lg  ">Our Vision</div>

                  <p className="text-gray-400">
<<<<<<< HEAD
                  Impact today to shape tomorrow's technology.
=======
                    Impact today to shape tomorrow's technology.
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
                  </p>
                </div>
              </div>
              <div className=" flex gap-4">
                <div className="">
<<<<<<< HEAD
                  <AiFillSetting className="text-4xl text-blue-secondary" />
=======
                  <AiOutlineCodeSandbox className="text-4xl text-blue-secondary" />
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
                </div>
                <div className=" space-y-1 w-96">
                  <div className="font-semibold text-lg  ">Our Values</div>

                  <p className="text-gray-400">
<<<<<<< HEAD
                  Equal Opportunity, Diversity & Inclusion, Respect & Integrity.
=======
                    Equal Opportunity, Diversity & Inclusion, Respect &
                    Integrity.
>>>>>>> 36c0f7d30738991436ce5d3fd1b899fb456237f4
                  </p>
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
