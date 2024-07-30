import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import Select from "react-select";

const PostNewJob = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

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

  const jobTypeOptions = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
  ];

  return (
    <div className="flex flex-col gap-6 bg-slate-100">
      <div>
        <h1 className="text-2xl flex gap-2 items-center font-medium p-6">
          <LuPlus className="bg-[#2F3573] text-4xl text-white" />
          Post New Job
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="flex items-center gap-2 font-medium">
              Job Title
            </label>
            <input
              className="border w-[40%] font-medium p-2 rounded-md border-black"
              type="text"
              name="jobTitle"
              placeholder="e.g Python Developer"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 font-medium">
              Skills
            </label>
            <input
              className="ps-2 border border-black p-2 w-[70%] lg:w-[80%] rounded-lg"
              type="text"
              placeholder="Add Skills"
              value={inputList}
              onChange={itemEvent}
              onKeyDown={handleKeyPress}
            />
          </div>
          <ul className="list-disc flex gap-4 pl-4">
            {items.map((value, index) => (
              <li
                key={index}
                className="flex border pl-2 border-black
               items-center gap-3 rounded-md"
              >
                {value}
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
                name="jobLocation"
                placeholder="Job Location"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Job Type</label>
              <Select
                options={jobTypeOptions}
                className="w-60"
                placeholder="Select Job Type"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label className="ml-2 font-medium">Active Job Post</label>
            </div>
          </div>
          <div className="">
            <label className="flex font-medium">Job Description</label>
            <textarea
              className="border w-[90%] mx-auto p-2 rounded-md font-medium border-black"
              name="jobDescription"
              rows="5"
              placeholder="Description"
            ></textarea>
          </div>
        </form>
        <div className=" w-32 ml-10 mt-4 rounded-lg text-center px-8 py-3 bg-[#2F3573] text-white">
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default PostNewJob;
