import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";

const EditJob = () => {
  const [jobdata, setJobData] = useState("");
  const [loading, setLoading] = useState("");

  const { id } = useParams();
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState();
  const {
    title,
    job_decrp,
    address,
    skills,
    job_type,
    is_active,
    remote_work,
  } = jobdata?.data || [];

  const [formdata, setFormData] = useState({
    title: title,
    job_decrp,
    address,
    skills,
    job_type,
    is_active,
    remote_work,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const token = localStorage.getItem("data");
  // / to get the data
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
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
        setFormData({
          title: result.data.title || "",
          job_decrp: result.data.job_decrp || "",
          address: result.data.address || "",
          skills: result.data.skills || "",
          job_type: result.data.job_type || "",
          is_active: result.data.is_active || false,
          remote_work: result.data.remote_work || false,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job data:", error.message);
        setLoading(false);
      }
    };

    fetchApi();
  }, [id, token]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputList.trim() !== "") {
      setItems((oldItems) => [...oldItems, inputList]);
      setInputList("");
      event.preventDefault();
    }
  };

  const handleDelete = (index) => {
    setItems((oldItems) => oldItems.filter((_, i) => i !== index));
  };
  // t oupdate the dta
  const updateData = async () => {
    const token = localStorage.getItem("data");
    try {
      const response = await fetch(
        `http://31.220.22.196:8010/jobs/list/${id}/update/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(formdata),
        }
      );

      if (!response.ok) {
        throw new Error("Job Not Posted.");
      }

      const result = await response.json();

      setFormData(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateData();

    setItems([]);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up after 3 seconds
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6 bg-slate-100">
      <div>
        <h1 className="text-2xl flex gap-2 items-center font-medium p-6">
          <LuPlus className="bg-[#2F3573] text-4xl text-white" />
          Edit Job
        </h1>
      </div>
      <div>
        <h3 className="pl-10">
          Please fill in the following information to post a new job
        </h3>
      </div>
      <div className="mb-16">
        <form
          className="flex flex-col w-full gap-4 pl-10"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="flex items-center gap-2 font-medium">
              Job Title
            </label>
            <input
              className="border w-[40%] font-medium p-2 rounded-md border-black"
              type="text"
              name="title"
              placeholder="e.g Python Developer"
              onChange={handleChange}
              value={formdata?.title}
            />
          </div>
          <div>
            <label className="flex items-center gap-2 font-medium">
              Skills
            </label>
            <input
              className="ps-2 border border-black p-2 w-[70%] lg:w-[80%] rounded-lg"
              type="text"
              placeholder="Add skills"
              name="skills"
              value={formdata?.skills}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
          </div>
          <ul className="list-disc flex gap-4 pl-4">
            {items.map((value, index) => (
              <li
                key={index}
                className="flex border pl-2 border-black items-center gap-3 rounded-md"
              >
                s{value}
                <AiOutlineClose
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(index)}
                  title="Remove item"
                />
              </li>
            ))}
          </ul>
          <div className="flex gap-20">
            <div className="flex flex-col">
              <label className="font-medium mb-2">Job Location</label>
              <input
                className="border p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="address"
                placeholder="Job Location"
                onChange={handleChange}
                value={formdata?.address}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Job Type</label>
              <select
                value={formdata.job_type}
                onChange={handleChange}
                name="job_type"
                className="w-60"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="is_active"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                checked={formdata.is_active}
                onChange={handleChange}
              />
              <label className="ml-2 font-medium">Active Job Post</label>
            </div>
          </div>
          <div className="">
            <label className="flex font-medium">Job Description</label>
            <textarea
              className="border w-[90%] mx-auto p-2 rounded-md font-medium border-black"
              name="job_decrp"
              rows="5"
              placeholder="Description"
              value={formdata.job_decrp}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="w-32 mt-4 rounded-lg text-center px-8 py-3 bg-[#2F3573] text-white">
              Update
            </button>
            {showPopup && (
              <div className="bg-green-500 w-64 flex mx-auto text-white p-2 rounded-md text-center mb-4">
                Job Updated Successfully!
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
