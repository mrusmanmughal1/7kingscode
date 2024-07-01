import ApplyForm from "./ApplyForm";
import MainBanner from "./MainBanner";

const QualityAnalyst = () => {
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
              Quality Analyst Automation Test Engineer
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p>Coral Springs, FL</p>
            <p>Onsite - IT - Development / Quality Analyst </p>
            <p>Title: Quality Analyst Automation Test Engineer</p>
          </div>
          <div className="w-[70%] flex flex-col pt-12">
            <p className=" text-2xl">EXPERIENCE:</p>
            <p>
              7 Kings Code LLC seeks a Quality Analyst Automation Test Engineer
              in Coral Springs, FL. Perform Functional, Regression testing, and
              UI testing using selenium test automation framework. Will develop
              selenium BDD framework using C# language. Will be responsible for
              manual testing using backend(SQL). Will implement automation using
              Selenium WebDriver, JAVA, TestNG, and Maven. Will also work with
              .Net Framework, Devops, MVC, and SQL. Will provide services to
              clients located throughout the U.S.
            </p>
            <br></br>
            <p className="text-2xl">JOB STATEMENT:</p>
            <p>
              Requires a Master’s Degree in Computer Science, Software
              Engineering or Information Technology and 2 years of computer/IT
              experience. This must include 2 years of experience in the
              following skill sets: Selenium test automation framework; C#;
              backend(SQL); Selenium WebDriver; JAVA; TestNG; Maven; Net
              Framework; Devops; MVC; and SQL. Must be willing to travel and
              relocate. 40 hours/week, $107,869 per year. Must also have
              authority to work permanently in the U.S. Applicants who are
              interested in this position may apply at www.jobpostingtoday.com
              (ref #13719) for consideration
            </p>
          </div>
        </div>
      </div>
      <ApplyForm />
    </>
  );
};

export default QualityAnalyst;
