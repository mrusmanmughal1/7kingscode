import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Modal from "../UI/ViewApplications";
import Adminfilters from "../Components/AdminFilters";

const AdminEmployeerList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleViewApplicationsClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const EmployerList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col py-8">
      <Adminfilters />
      {EmployerList.map((val, i) => (
        <div
          key={i}
          className="w-[90%] mx-auto flex justify-center items-center flex-col md:flex-row gap-16 p-3 shadow-lg border-2 border-b
        hover:bg-slate-100 bg-white mt-4"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="uppercase font-bold">Sohaib Bhatti</p>
            <p className="text-xs flex gap-2 items-center">
              <BiWorld /> Lahore, Pakistan
            </p>
          </div>
          <button
            onClick={handleViewApplicationsClick}
            className=" px-5 py-3 items-center justify-center bg-blue-secondary text-white rounded-md text-sm"
          >
            View Applications
          </button>
          <div className="md:w-1/3 w-full flex justify-end gap-16 md:flex-row md:items-center text-purple-900">
            <NavLink to="/admin/jobs-view">
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

export default AdminEmployeerList;
