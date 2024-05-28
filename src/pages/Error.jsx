import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className=" h-[50%] flex py-60  flex-col  businessGrowth  gap-4 items-center">
      <p className="text-8xl fade   font-bold">404</p>
      <p className="font-bold uppercase text-4xl">Page not found ! </p>
      <NavLink
        to={"/"}
        className="bg-blue-secondary text-white p-4 font-medium uppercase"
      >
        Move back to Home pAge
      </NavLink>
    </div>
  );
};

export default Error;
