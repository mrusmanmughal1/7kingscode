/* eslint-disable no-unused-vars */
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import Location from "../UI/Location";
import TechnologyChallenges from "../UI/TechnologyChallenges";
import WeAreTecz from "../UI/WeAreTecz";
import TechManagement from "../UI/TechManagement";
import Whitslider from "../UI/Whitslider";
import BestSolution from "../UI/BestSolution";
import SolveProblem from "../UI/SolveProblem";

const Main = () => {
  return (
    <div>
      <Hero />
      <Whitslider />
      <WeAreTecz />
      {/* <WeAreOffering /> */}

      <Counter />
      <TechManagement />
      <TechnologyChallenges />
      {/* <OurPartners /> */}
      <BestSolution />
      <SolveProblem />

      <Location />
    </div>
  );
};

export default Main;
