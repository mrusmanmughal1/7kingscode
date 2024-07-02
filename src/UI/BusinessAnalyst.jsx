import ApplyForm from "./ApplyForm";
import MainBanner from "./MainBanner";

const BusinessAnalyst = () => {
  return (
    <>
      <div>
        <MainBanner
          text="Contact"
          title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
        />
        <div className="w-[70%] mx-auto pt-24">
          <div>
            <p className="text-xl border-b border-black text-blue-secondary font-semibold pb-2">
              Business Analyst
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p>Coral Springs, FL</p>
            <p>Onsite - IT - Development / Business Analyst </p>
            <p>Title: Business Analyst</p>
          </div>
          <div className="w-[70%] flex flex-col pt-12">
            <p className=" text-2xl">EXPERIENCE:</p>
            <p>
              7 Kings Code LLC seeks a SharePoint Developer in Coral Springs,
              FL. Looking for Business Analyst with Scrum Master/ Product Owner
              certification. Consult with business teams and technical teams to
              develop requirements for improvements to systems. Prepare diagrams
              explaining the modifications so that both technical staff and
              executive management can visualize and understand what must be
              done. Should have experience of requirements elicitation,
              storyboard development, wire frame preparation, test planning and
              test execution. Drives consistent project delivery through the
              entire project lifecycle
            </p>
            <br></br>
            <p className="text-2xl">JOB STATEMENT:</p>
            <p>
              Requires a Bachelor’s Degree in Computer Science, Software
              Engineering or Information Technology and 2 years of computer/IT
              experience. This must include 2 years of experience in the
              following skill sets: Kanban Technologies, Agile, Scrum, Product
              backlogs, Maintaining Sprint. Must be willing to travel and
              relocate. 40 hours/week, $126,000 per year.
            </p>
          </div>
        </div>
      </div>
      <ApplyForm />
    </>
  );
};

export default BusinessAnalyst;
