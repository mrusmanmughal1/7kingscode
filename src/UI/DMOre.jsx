import { NavLink } from "react-router-dom";

const DMOre = ({ to }) => {
  return (
    <div className="">
      <NavLink to={to}>
        <button className="bg-blue-secondary font-medium px-8 p-4 hover:bg-black  text-white hover:text-white hover:translate-y-1 transition duration-300 ">
          Discover More
        </button>
      </NavLink>
    </div>
  );
};

export default DMOre;
