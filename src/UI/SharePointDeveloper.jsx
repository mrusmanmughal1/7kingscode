import ApplyForm from "./ApplyForm";
import MainBanner from "./MainBanner";

const SharePointDeveloper = () => {
  return (
    <>
      <div>
        <MainBanner
          text="Contact"
          title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
        />
        <div className="w-[90%] lg:w-[70%] mx-auto pt-24">
          <div>
            <p className="text-xl border-b border-black text-blue-secondary font-semibold pb-2">
              Share Point Developer
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p>Coral Springs, FL</p>
            <p>Onsite - IT - Development / SharePoint Developer </p>
            <p>Title: Share Point Developer</p>
          </div>
          <div className="w-[90%] lg:w-[70%] flex flex-col pt-12">
            <p className=" text-2xl">Job Requirement:</p>
            <p>
              7 Kings Code LLC seeks a SharePoint Developer in Coral Springs,
              FL. Perform build workflow forms using SharePoint Designer and
              Power Automate. Code pages using HTML5, JavaScript and Typescript,
              Jquery, CSS, SQL. Use SharePoint Framework SPx to create website
              designs with OOTB, UI extension, page layouts, themes and display
              templates. Development experience of SharePoint artifacts like
              webparts, workflows, branding, timer jobs REST call using SSOM and
              CSOM. Will provide services to clients located throughout the U.S
            </p>
            <br></br>
            <p className="text-2xl">JOB STATEMENT:</p>
            <p>
              -Requires a Master’s Degree in Computer Science, Software
              Engineering or Information Technology and 4 years of computer/IT
              experience.
            </p>{" "}
            <p>
              -This must include 2 years of experience in the following skill
              sets:
            </p>
            <p>-SharePoint Framework</p>
            <p>-Bootstrap</p>
            <p>-Power Apps</p>
            <p>-JavaScript</p>
            <p>-HTML5</p> InfoPath. 40 hours/week, $125,482 per year.
          </div>
        </div>
      </div>
      <ApplyForm />
    </>
  );
};

export default SharePointDeveloper;
