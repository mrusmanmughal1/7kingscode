import { BiWorld } from "react-icons/bi";
import MainBanner from "./MainBanner";
import Filters from "./Filters";
import { NavLink } from "react-router-dom";

const Careers = () => {
  const joblisting = [1, 2, 3, 4, 5];
  return (
    <div className="">
      <div>
        <MainBanner
          text="Contact"
          title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
        />
        <div className="w-[60%] mx-auto pb-32">
          <div className="flex flex-col space-y-8 pt-12">
            <p className="text-2xl font-semibold text-blue-secondary">
              DISCOVER NEW OPPORTUNITIES
            </p>
            <p>
              Looking for your next IT job opportunity? We specialize in
              matching proven technology professionals with the right jobs
              across a range of specialties and experience levels. Explore
              contract, contract-to-hire, and direct hire job opportunities with
              great benifits.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Filters />
            {joblisting.map((v, i) => (
              <div
                key={i}
                className="text-blue-secondary border-b border-black pt-8"
              >
                <div className="w-full md:w-full justify-between flex flex-col gap-4">
                  <p className="uppercase font-bold">
                    Software Development Manager
                  </p>
                  <div className="text-xs flex gap-28 text-black items-center w-full justify-between pb-2">
                    <div className="">
                      <p className="flex gap-2 items-center w-full justify-between">
                        <BiWorld /> Lahore , Pakistan
                      </p>
                    </div>
                    <p>Contract</p>
                    <p>IT-Development</p>
                    <NavLink to="/Careersdetail">
                      <button
                        className="text-xs bg-blue-secondary font-semibold px-6
               rounded-md py-2 border border-black hover:text-black hover:bg-blue-secondary"
                      >
                        VIEW MORE
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="w-full  flex justify-end gap-4 items-center md:flex-row text-black"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
