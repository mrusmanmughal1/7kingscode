import { BsBriefcaseFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { ImBriefcase } from "react-icons/im";
import { Link } from "react-router-dom";

const AdminTopWidgets = ({ allJobs, activeJobs, inactiveJobs }) => {
  const widgets = [
    {
      title: "Jobs Posted",
      number: allJobs,
      icons: <BsBriefcaseFill />,
      Link: "jobs-posted",
    },
    {
      title: "Active Jobs",
      number: activeJobs,
      icons: <BiSolidBriefcase className="text-green-400" />,
      Link: "jobs-posted",
    },
    {
      title: "Inactive Jobs",
      number: inactiveJobs,
      icons: <ImBriefcase className="text-red-500" />,
      Link: "jobs-posted",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-20 justify-evenly">
        {widgets.map((widget, i) => (
          <Link to={widget.Link} key={i}>
            <div className="bg-[#2F3573] w-72 text-white rounded-md p-10 transition-all duration-500 hover:border-[#2F3573] border-2 hover:bg-blue-secondary flex-col flex gap-2 font-semibold shadow-2xl">
              <p className="font-bold uppercase text-center text-lg">
                {widget.title}
              </p>
              <p className="text-btn-primary text-2xl 2xl:text-4xl font-bold flex justify-center gap-4">
                {widget.number} {widget.icons}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminTopWidgets;
