import { NavLink } from "react-router-dom";
import DoughnutChart from "../Components/DoughnutChart";
import LineChart from "../Components/LineChart";
import AdminTopWidgets from "../Components/TopWidgets";
import { RxDashboard } from "react-icons/rx";
import { TiPlus } from "react-icons/ti";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-100 ">
      <div className="flex-1 p-6 :w-max-[70%]">
        <div className="flex justify-between">
          <h1 className="text-2xl flex gap-2 items-center font-bold mb-12">
            {" "}
            <RxDashboard className="bg-black text-white rounded-sm" />
            Dashboard
          </h1>
          <NavLink to="/admin/new-jobs">
            {" "}
            <button className=" flex items-center gap-1 bg-blue-secondary text-white p-2 text-base rounded-md  mb-12">
              <TiPlus /> Create Job
            </button>
          </NavLink>
        </div>
        <div className="">
          {" "}
          <AdminTopWidgets />
        </div>
        <div className="grid grid-cols-1 shadow-2xl md:grid-cols-2 gap-6 mt-20">
          <div className="bg-white p-4 shadow-2xl rounded-lg">
            <DoughnutChart />
          </div>
          <div className="bg-white p-4 shadow-2xl rounded-lg">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
