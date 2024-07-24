import { IoFilterSharp } from "react-icons/io5";
const Adminfilters = () => {
  return (
    <div className=" bg-slate-100 p-8 rounded-md">
      <p className="flex gap-2 items-center pb-4 ">
        {" "}
        <IoFilterSharp /> Filters
      </p>
      <div className="w-full flex gap-4 ">
        <div className=" w-full">
          <input
            type="text"
            className="w-full border-2 border-blue-secondary p-2"
            name=""
            id=""
            placeholder="Search "
          />
        </div>
        <div className="w-full border-2 border-blue-secondary">
          <select name="cars" id="cars" className="w-full p-2">
            <option value="volvo">Specialization</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="w-full border-2 border-blue-secondary">
          <select name="cars" id="cars" className="w-full p-2">
            <option value="volvo">Locations</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Adminfilters;
