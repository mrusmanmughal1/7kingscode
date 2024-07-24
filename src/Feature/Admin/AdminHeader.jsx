import Logo from "../../assets/logos/100.png";

const AdminHeader = () => {
  return (
    <div className="bg-blue-100">
      <div className="w-56 p-4 ">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default AdminHeader;
