import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Adminfilters from "../Components/AdminFilters";

const AdminEmployeerList = () => {
  const EmployerList = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex flex-col gap-4 mt-8 mb-8">
      {/* <Adminfilters /> */}
      {EmployerList.map((val, i) => (
        <div
          key={i}
          className="w-[90%] mx-auto flex flex-col md:flex-row gap-24 p-5 shadow-lg border-2 border-b
        hover:bg-slate-100 bg-white"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="uppercase font-bold">Sohaib Bhatti</p>
            <p className="text-xs flex gap-2 items-center">
              <BiWorld /> Lahore , Pakistan
            </p>
          </div>
          <button className=" bg-blue-secondary text-white rounded-md md:w-1/6 text-sm  font-bold">
            Download resume
          </button>
          <div className="md:w-1/3 w-full flex justify-end gap-16 md:flex-row md:items-center text-purple-900">
            <NavLink to="/admin/view-jobs">
              <button
                className="text-xs font-semibold lg:px-2 xl:px-10 xl:py-3 px-8
             rounded-md py-3 border-2 text-white bg-[#2F3573] hover:text-white hover:bg-blue-secondary"
              >
                VIEW
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEmployeerList;
