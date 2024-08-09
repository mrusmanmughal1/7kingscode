import { useState, useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Modal from "../UI/ViewApplications";
import Adminfilters from "../Components/AdminFilters";
import { MdOutlineSimCardDownload } from "react-icons/md";
import useGETALLJOBS from "../Services/useGETALLJOBS";

const JobsPosted = ({ setAllJobs, setActiveJobs, setInactiveJobs }) => {
  const [active, setActive] = useState(""); // Use empty string for all jobs
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState([]);
  const { joblisting } = useGETALLJOBS(active); // Pass active filter to the hook

  const handleViewApplicationsClick = (id) => {
    setIsModalVisible(true);
    const filtered = joblisting.filter((val) => val.id === id);
    setSelected(filtered);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Calculate job counts
  const allJobsCount = joblisting?.length || 0;
  const activeJobsCount =
    joblisting?.filter((job) => job.is_active).length || 0;
  const inactiveJobsCount =
    joblisting?.filter((job) => !job.is_active).length || 0;

  // Set counts to parent component or state
  useEffect(() => {
    if (setAllJobs) setAllJobs(allJobsCount);
    if (setActiveJobs) setActiveJobs(activeJobsCount);
    if (setInactiveJobs) setInactiveJobs(inactiveJobsCount);
  }, [joblisting, setAllJobs, setActiveJobs, setInactiveJobs]);

  return (
    <div className="flex flex-col bg-slate-100 py-8">
      <Adminfilters setactive={setActive} />
      {joblisting
        ?.slice()
        .reverse()
        .map((val, i) => (
          <div
            key={i}
            className="w-[90%] mx-auto flex justify-center items-center flex-col md:flex-row gap-16 p-3 shadow-lg border-2 border-b hover:bg-slate-100 bg-white mt-4"
          >
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <p className="uppercase font-bold">{val.title}</p>
              <p className="text-xs flex gap-2 items-center">
                <BiWorld /> {val.address}
              </p>
              <p>{val.job_type}</p>
            </div>
            <button
              onClick={() => handleViewApplicationsClick(val.id)}
              className="px-2 py-2 w-56 items-center justify-center bg-blue-secondary text-white rounded-md text-sm"
            >
              View Applications
            </button>
            <p
              className={`${
                val.is_active ? "bg-green-500" : "bg-red-500"
              } text-white p-1 rounded-md w-52 text-center`}
            >
              Status: {val.is_active ? "Active" : "Inactive"}
            </p>
            <div className="md:w-1/3 w-full flex justify-end gap-16 md:flex-row md:items-center text-purple-900">
              <NavLink to={`/admin/jobs-view/${val.id}`}>
                <button className="text-xs font-semibold lg:px-2 xl:px-10 xl:py-3 px-8 rounded-md py-3 border-2 text-white bg-[#2F3573] hover:text-white hover:bg-blue-secondary">
                  VIEW
                </button>
              </NavLink>
            </div>
          </div>
        ))}

      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        {selected[0]?.applications_received?.map((val, i) => (
          <div key={i} className="bg-slate-200 p-2">
            <div className="flex text-sm gap-4 justify-between">
              <p className="font-bold">{val.applicant_name}</p>
              <p className="font-bold">{val.applicant_email}</p>
              <a href={val.applicant_resume} download className="text-2xl">
                <MdOutlineSimCardDownload />
              </a>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default JobsPosted;
