import MainBanner from "../UI/MainBanner";
import WeAreOffering from "../UI/WeAreOffering";
import BusinessGrowth from "../UI/BusinessGrowth";
import SolveProblem from "../UI/SolveProblem";

const Services = () => {
  return (
    <div>
      <MainBanner
        text="Services"
        title="7 Kings Code  -IT Solutions & Technology"
      />
      <BusinessGrowth />
      <WeAreOffering />
      <SolveProblem />
    </div>
  );
};

export default Services;
