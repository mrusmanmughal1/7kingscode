import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Modal from "../UI/ViewApplications";
import Adminfilters from "../Components/AdminFilters";

const JobsList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const arr = {
  //   count: 2,

  //   results: [{ title: "usman " }, { title: "usman" }],
  // };
  const [jobs, setJobs] = useState([]);

  const handleViewApplicationsClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const token = localStorage.getItem("data");
      try {
        const response = await fetch("http://31.220.22.196:8010/jobs/list/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            "Login failed. Please check your username and password."
          );
        }

        const result = await response.json();
        console.log("Login successful:", result);
        setJobs(result);
      } catch (error) {
        // Handle error, e.g., displaying error messages
        console.error("Error during login:", error.message);
      }
    };
    fetchApi();
  }, [isModalVisible]);

  return (
    <div className="flex flex-col bg-slate-100 py-8">
      <Adminfilters />
      {jobs?.results?.map((val, i) => (
        <div
          key={i}
          className="w-[90%] mx-auto flex justify-center items-center flex-col md:flex-row gap-16 p-3 shadow-lg border-2 border-b
        hover:bg-slate-100 bg-white mt-4"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="uppercase font-bold">{val.title}</p>
            <p className="text-xs flex gap-2 items-center">
              <BiWorld /> {val.address}
            </p>
            <p>{val.job_type}</p>
          </div>
          <button
            onClick={handleViewApplicationsClick}
            className=" px-5 py-3 items-center justify-center bg-blue-secondary text-white rounded-md text-sm"
          >
            View Applications
          </button>
          <div className="md:w-1/3 w-full flex justify-end gap-16 md:flex-row md:items-center text-purple-900">
            <NavLink to={`/admin/jobs-view/${val.id}`}>
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

      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <div></div>
      </Modal>
    </div>
  );
};

export default JobsList;
