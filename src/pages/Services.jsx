import MainBanner from "../UI/MainBanner";
import WeAreOffering from "../UI/WeAreOffering";
import SolveProblem from "../UI/SolveProblem";
import BestSolution from "../UI/BusinessGrowth";

const Services = () => {
  return (
    <div>
      <MainBanner
        text="Services"
        title="7 Kings Code  -IT Solutions & Technology"
      />
      <BestSolution/>
      <WeAreOffering />
      <SolveProblem />
    </div>
  );
};

export default Services;
