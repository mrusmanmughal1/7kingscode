import MainBanner from "../UI/MainBanner";
import WeAreOffering from "../UI/WeAreOffering";
import SolveProblem from "../UI/SolveProblem";
import BusinessGrowth from "../UI/BusinessGrowth";

const Services = () => {
  return (
    <div>
      <MainBanner
        text="Services"
        title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
      />
      <BusinessGrowth />
      <WeAreOffering />
      <SolveProblem />
    </div>
  );
};

export default Services;
