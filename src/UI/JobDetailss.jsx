import ApplyForm from "./ApplyForm";
import MainBanner from "./MainBanner";
import useGetSingleJobDetails from "./../Services/useGetSingleJobDetails";

const JobDetailss = () => {
  const { jobData, loading, error } = useGetSingleJobDetails();
  if (error)
    return (
      <div className="h-screen bg-blue-secondary flex justify-center items-center w-full">
        <div
          className=" text-white text-4xl ... flex items-center gap-2"
          disabled
        >
          <div className="animate-spin h-10 w-10  rounded-full   border-4 border-r-primary"></div>
          Unable To Fetch Data .. Try again later .
        </div>
      </div>
    );
  if (loading)
    return (
      <div className="h-screen bg-blue-secondary flex justify-center items-center w-full">
        <div
          className=" text-white text-4xl ... flex items-center gap-2"
          disabled
        >
          <div className="animate-spin h-10 w-10  rounded-full   border-4 border-r-primary"></div>
          Loading Data...
        </div>
      </div>
    );
  return (
    <>
      <div>
        <MainBanner text="" title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS" />
        <div className="w-[90%] lg:w-[70%] mx-auto pt-24 pb-14">
          <div>
            <p className="text-xl border-b border-black text-blue-secondary font-semibold pb-2">
              Title: {jobData?.data?.title}
            </p>
          </div>
          <div className="">
            <div className="flex flex-col gap-4 pt-4">
              <p className="flex gap-2 font-medium">
                Skills:<span>{jobData?.data?.skills}</span>
              </p>
              <p className="flex gap-2 font-medium ">
                Location:<span>{jobData?.data?.address}</span>
              </p>
              <p className="flex gap-2 font-medium">
                Job Type:<span>{jobData?.data?.job_type}</span>
              </p>
            </div>
          </div>
          <div className="w-[90%] lg:w-[70%] flex flex-col pt-12">
            <p className="text-2xl text-blue-secondary font-semibold border-b border-black">
              Job Requirement:
            </p>
            <p className="pt-6">{jobData?.data?.job_decrp}</p>
          </div>
        </div>
      </div>
      <ApplyForm />
    </>
  );
};

export default JobDetailss;
