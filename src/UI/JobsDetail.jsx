const JobsDetail = () => {
  const jobData = {
    title: "Share Point Developer",
    location: "Coral Springs, FL",
    jobType: "Onsite - IT - Development/ SharePoint Developer",
    description: `7 Kings Code LLC seeks a SharePoint Developer in Coral Springs,
      FL. Perform build workflow forms using SharePoint Designer and
      Power Automate. Code pages using HTML5, JavaScript and Typescript,
      Jquery, CSS, SQL. Use SharePoint Framework SPx to create website
      designs with OOTB, UI extension, page layouts, themes and display
      templates. Development experience of SharePoint artifacts like
      webparts, workflows, branding, timer jobs REST call using SSOM and
      CSOM. Will provide services to clients located throughout the U.S
    
      Requires a Master’s Degree in Computer Science, Software Engineering or Information Technology and 4 years of computer/IT experience.
      This must include 2 years of experience in the following skill sets:
      SharePoint Framework
      Bootstrap
      Power Apps
      JavaScript
      HTML5`,
    requirements: [
      "Master’s Degree in Computer Science, Software Engineering or Information Technology",
      "4 years of computer/IT experience",
      "2 years of experience with SharePoint Framework",
      "Experience with Bootstrap",
      "Experience with Power Apps",
      "Proficiency in JavaScript",
      "Proficiency in HTML5",
    ],
  };

  return (
    <div>
      <div className="w-[90%] lg:w-[90%] mx-auto pt-12 pb-24">
        <div>
          <p className="text-xl border-b border-black text-blue-secondary font-semibold pb-2">
            {jobData.title}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 pt-4">
            <p>{jobData.location}</p>
            <p>{jobData.jobType}</p>
            <p>Title: {jobData.title}</p>
          </div>
          <div className="flex gap-8 flex-col pt-4 px-12">
            <div className="bg-blue-secondary px-12 py-2 rounded-md text-white">
              <button>Update Job</button>
            </div>
            <div className="bg-blue-secondary px-12 py-2 rounded-md text-white">
              <button>Delete Job</button>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[70%] flex flex-col pt-12">
          <p className="text-2xl border-b border-black">Job Description:</p>
          <p className="pt-6">{jobData.description}</p>
        </div>
        <div className="w-[90%] lg:w-[70%] flex flex-col pt-12">
          <ul className="pt-6 list-disc list-inside">
            {jobData.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobsDetail;
