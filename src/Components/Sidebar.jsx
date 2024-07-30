import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { PiListChecksFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="w-64 md:min-w-[20%] bg-[#2F3573] text-white ">
      <nav className="mt-8">
        <ul>
          <li>
            <Link
              to="/admin"
              className="flex  gap-2 items-center p-4 hover:bg-blue-secondary"
            >
              <RxDashboard className="text-2xl" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/jobs-posted"
              className="flex  gap-2 items-center  p-4 hover:bg-blue-secondary"
            >
              <PiListChecksFill className="text-2xl" /> Jobs Posted
            </Link>
          </li>
          <li>
            <Link
              to="/admin/new-jobs"
              className="flex  gap-2 items-center p-4 hover:bg-blue-secondary"
            >
              <MdOutlineCreateNewFolder className="text-2xl" /> Post New Job
            </Link>
          </li>
         
          <li>
            <Link
              to="/7kctech_administration"
              className="flex  gap-2 items-center  p-4 hover:bg-blue-secondary"
            >
              <RiLogoutCircleRLine className="text-2xl" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
