import { BiWorld } from "react-icons/bi";
import MainBanner from "./MainBanner";
import Filters from "./Filters";
import { NavLink } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import useGETALLJOBS from "../Services/useGETALLJOBS";

const Careers = () => {
  const { joblisting, error } = useGETALLJOBS();

  return (
    <div className="">
      <div>
        <MainBanner
          text="Careers"
          title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
        />
        <div className="lg:w-[60%] w-[90%] mx-auto pb-32">
          <div className="flex flex-col space-y-8 pt-12">
            <p className="text-2xl  font-semibold text-blue-secondary">
              DISCOVER NEW OPPORTUNITIES
            </p>
            <p className="text-justify">
              Looking for your next IT job opportunity? We specialize in
              matching proven technology professionals with the right jobs
              across a range of specialties and experience levels. Explore
              contract, contract-to-hire, and direct hire job opportunities with
              great benifits.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Filters />
            {joblisting?.map((v, i) => (
              <div
                key={i}
                className="text-blue-secondary border-b border-black pt-8"
              >
                <div className="w-full md:w-full justify-between flex flex-col gap-4">
                  <p className="uppercase font-bold">{v.title}</p>
                  <div className="text-xs flex gap-20 lg:gap-28 text-black items-center w-full justify-between pb-2">
                    <div className="">
                      <p className="flex gap-2 items-center w-full justify-between">
                        <BiWorld className="text-xl" /> {v.address}
                      </p>
                    </div>
                    <p> Job Type : {v.job_type}</p>

                    <NavLink to={`/careers/jobs-detail/${v.id}`}>
                      <button className="text-2xl text-blue-secondary">
                        <LuMoveRight />
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
