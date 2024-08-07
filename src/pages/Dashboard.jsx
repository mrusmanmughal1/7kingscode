import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DoughnutChart from "../Components/DoughnutChart";
import LineChart from "../Components/LineChart";
import AdminTopWidgets from "../Components/TopWidgets";
import { RxDashboard } from "react-icons/rx";
import { TiPlus } from "react-icons/ti";
import useGETALLJOBS from "../Services/useGETALLJOBS";

const Dashboard = () => {
  const [allJobs, setAllJobs] = useState(0);
  const [activeJobs, setActiveJobs] = useState(0);
  const [inactiveJobs, setInactiveJobs] = useState(0);

  const { joblisting } = useGETALLJOBS(); // Assuming this hook handles fetching

  useEffect(() => {
    if (joblisting) {
      const allJobsCount = joblisting.length;
      const activeJobsCount = joblisting.filter((job) => job.is_active).length;
      const inactiveJobsCount = joblisting.filter(
        (job) => !job.is_active
      ).length;

      setAllJobs(allJobsCount);
      setActiveJobs(activeJobsCount);
      setInactiveJobs(inactiveJobsCount);
    }
  }, [joblisting]);

  return (
    <div className="flex bg-slate-100">
      <div className="flex-1 p-6 :w-max-[70%]">
        <div className="flex justify-between">
          <h1 className="text-2xl flex gap-2 items-center font-bold mb-12">
            <RxDashboard className="bg-black text-white rounded-sm" />
            Dashboard
          </h1>
          <NavLink to="/admin/new-jobs">
            <button className="flex items-center gap-1 bg-blue-secondary text-white p-2 text-base rounded-md mb-12">
              <TiPlus /> Create Job
            </button>
          </NavLink>
        </div>
        <div>
          <AdminTopWidgets
            allJobs={allJobs}
            activeJobs={activeJobs}
            inactiveJobs={inactiveJobs}
          />
        </div>
        <div className="grid grid-cols-1 shadow-2xl md:grid-cols-2 gap-6 mt-20">
          <div className="bg-white p-4 shadow-2xl rounded-lg">
            <DoughnutChart
              allJobs={allJobs}
              activeJobs={activeJobs}
              inactiveJobs={inactiveJobs}
            />
          </div>
          <div className="bg-white p-4 shadow-2xl rounded-lg">
            <LineChart
              allJobs={allJobs}
              activeJobs={activeJobs}
              inactiveJobs={inactiveJobs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
