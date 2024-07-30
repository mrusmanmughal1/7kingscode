import AdminHeader from "../../Feature/Admin/AdminHeader";
import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";

import FooterBottom from "../FooterBottom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
};

export default AdminLayout;
