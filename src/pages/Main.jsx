/* eslint-disable no-unused-vars */
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import Location from "../UI/Location";
import OurPartners from "../UI/OurPartners";
import TechnologyChallenges from "../UI/TechnologyChallenges";
import WeAreTecz from "../UI/WeAreTecz";
import TechManagement from "../UI/TechManagement";
import WeAreOffering from "../UI/WeAreOffering";
import Whitslider from "../UI/Whitslider";
import BestSolution from "../UI/BestSolution";

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
      <hr />
      <Location />
    </div>
  );
};

export default Main;
