import { BsBriefcaseFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { ImBriefcase } from "react-icons/im";
import { Link } from "react-router-dom";

const AdminTopWidgets = () => {
  const Raw = [
    {
      title: " Jobs Posted",
      number: 90,
      icons: <BsBriefcaseFill />,
      Link: "jobs-posted",
    },
    {
      title: " Active Jobs",
      number: 85,
      icons: <BiSolidBriefcase className="text-green-400" />,
    },
    {
      title: " InActive Jobs",
      number: 15,
      icons: <ImBriefcase className="text-red-500" />,
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-20  justify-evenly">
        {Raw.map((val, i) => {
          const { title, number, icons } = val;
          return (
            <Link to={val.Link} key={i}>
              <div
                className="bg-[#2F3573] w-72 text-white  rounded-md p-10 transition-all duration-500 hover:border-[#2F3573]  border-2 hover:bg-blue-secondary flex-col flex gap-2 font-semibold   shadow-lg "
                key={i}
              >
                <p className="font-bold uppercase   text-center text-lg">
                  {title}
                </p>
                <p className="text-btn-primary  text-2xl   2xl:text-4xl font-bold flex  justify-center gap-4">
                  {number} {icons}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTopWidgets;
