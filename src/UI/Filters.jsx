import { IoFilterSharp } from "react-icons/io5";
const Filters = () => {
  return (
    <div className="  p-0 rounded-md pt-12">
      <p className="flex gap-2 items-center pb-2 ">
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
      </div>
    </div>
  );
};

export default Filters;
