import ApplyForm from "./ApplyForm";
import MainBanner from "./MainBanner";

const QualityAnalyst = () => {
  return (
    <>
      <div className="bg-slate-100 pb-14">
        <MainBanner
          text="Contact"
          title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
        />
        <div className="w-[70%] mx-auto pt-24 ">
          <div>
            <p className="text-xl border-b border-black text-blue-secondary font-semibold pb-2">
              Quality Analyst Automation Test Engineer
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p>Coral Springs, FL</p>
            <p>Onsite - IT - Development / Quality Analyst </p>
            <p>Title: Quality Analyst Automation Test Engineer</p>
          </div>
          <div className="w- flex text-justify flex-col pt-12">
            <p className=" text-2xl">Job Requirement:</p>
            <p>
              7 Kings Code LLC seeks a Quality Analyst Automation Test Engineer
              in Coral Springs, FL. Perform Functional, Regression testing, and
              UI testing using selenium test automation framework. Will develop
              selenium BDD framework using C# language. Will be responsible for
              manual testing using backend (SQL). Will implement automation
              using Selenium WebDriver, JAVA, Testing, and Maven. Will also work
              with .Net Framework, Devops, MVC, and SQL. Will provide services
              to clients located throughout the U.S.
            </p>
            <br></br>
            <p className="text-2xl">JOB STATEMENT:</p>
            <p>
              -Requires a Master’s Degree in Computer Science, Software
              Engineering or Information Technology and 2 years of computer/IT
              experience.
              <p>
                -This must include 2 years of experience in the following skill
                sets:
              </p>{" "}
              <p> -Selenium test automation framework</p>
              <p>-C# </p>
              <p>-Backend(SQL)</p>
              <p>-Selenium WebDriver</p>
              <p>-JAVA</p> <p>-Testing Maven</p>
              <p>-Net Framework</p>
              <p>-Devops</p>
              <p>-MVC</p> <p> -SQL</p>
              <p>-Must be willing to travel and relocate.</p>
              <br></br>
              <p>
                40 hours/week, $107,869 per year Must also have authority to
                work permanently in the U.S Applicants who are interested in
                this position may apply at www.jobpostingtoday.com (ref #13719)
                for consideration.
              </p>
            </p>
          </div>
        </div>
      </div>
      <ApplyForm />
    </>
  );
};

export default QualityAnalyst;
