import { IoFilterSharp } from "react-icons/io5";
const Adminfilters = () => {
  return (
    <div className=" bg-slate-100 p-2 rounded-md">
      <p className="flex gap-2 px-12 items-center pb-4 ">
        {" "}
        <IoFilterSharp /> Filters
      </p>
      <div className="px-12 ">
       
        <div className="w-[40%] border-2 border-blue-secondary">
          <select name="cars" id="cars" className="w-full p-2">
            <option value="volvo">All Jobs</option>
            <option value="saab">Active Jobs</option>
            <option value="mercedes">InActive Jobs</option>
         
          </select>
        </div>
      
      </div>
    </div>
  );
};

export default Adminfilters;
