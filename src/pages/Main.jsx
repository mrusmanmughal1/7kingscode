import Header from "../Components/Header";
import BestSolution from "../UI/BestSolution";
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import Location from "../UI/Location";
import OurPartners from "../UI/OurPartners";
import TechnologyChallenges from "../UI/TechnologyChallenges";
import WeAreTecz from "../UI/WeAreTecz";
import WhatElse from "../UI/WhatElse";
import TechManagement from "../UI/TechManagement";

const Main = () => {

  
  return (
    <div>
      <Hero />
      {/* <BestSolution  /> */}
      <WeAreTecz />
      <Counter />
      <TechManagement />
      <TechnologyChallenges />
      <OurPartners />
      {/* <WhatElse /> */}
      <Location />
    </div>
  );
};

export default Main;
