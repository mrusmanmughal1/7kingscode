import { IoFilterSharp } from "react-icons/io5";

const Adminfilters = ({ setactive }) => {
  const handleChange = (e) => {
    setactive(e.target.value);
  };

  return (
    <div className="p-2 rounded-md">
      <p className="flex gap-2 px-12 items-center pb-4">
        <IoFilterSharp /> Filters
      </p>
      <div className="px-14">
        <div className="w-[40%] border-2 border-blue-secondary">
          <select onChange={handleChange} className="w-full p-2">
            <option value="">All Jobs</option>
            <option value="true">Active Jobs</option>
            <option value="false">Inactive Jobs</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Adminfilters;
