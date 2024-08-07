import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const JobsDetail = () => {
  const [jobdata, setJobData] = useState("");
  const [loading, setLoading] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("data");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `http://31.220.22.196:8010/jobs/list/${id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job details.");
        }

        const result = await response.json();
        setJobData(result);
      } catch (error) {
        console.error("Error fetching job data:", error.message);
        setLoading(false);
      }
    };

    fetchApi();
  }, [id, token]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://31.220.22.196:8010/jobs/delete/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete job. Status: ${response.status}`);
      }

      navigate("/admin/jobs-posted");
    } catch (error) {
      console.error("Error deleting job:", error.message);
    }
  };
  return (
    <div className="bg-slate-100">
      <div className="w-[90%]  lg:w-[90%] mx-auto pt-12 pb-24">
        <div>
          <p className="text-xl border-b border-black text-blue-secondary font-semibold pb-2">
            Title: {jobdata?.data?.title}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 pt-4">
            <p className="flex gap-2 font-medium">
              Skills:<span>{jobdata?.data?.skills}</span>
            </p>
            <p className="flex gap-2 font-medium ">
              Location:<span>{jobdata?.data?.address}</span>
            </p>
            <p className="flex gap-2 font-medium">
              Job Type:<span>{jobdata?.data?.job_type}</span>
            </p>
          </div>
          <div className="flex gap-8 flex-col pt-4 px-12">
            <div className="bg-blue-secondary px-12 py-2 rounded-md text-white">
              <NavLink to={`/admin/Edit/${jobdata?.data?.id}`}>
                Update Job
              </NavLink>
            </div>
            <div className="bg-blue-secondary px-12 py-2 rounded-md text-white">
              <button onClick={handleDelete}>Delete Job</button>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[70%] flex flex-col pt-12">
          <p className="text-2xl text-blue-secondary font-semibold border-b border-black">
            Job Description:
          </p>
          <p className="pt-6">{jobdata.data?.job_decrp}</p>
        </div>
      </div>
    </div>
  );
};

export default JobsDetail;
