import Header from "../Components/Header";
import BestSolution from "../UI/BestSolution";
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import Location from "../UI/Location";
import OurPartners from "../UI/OurPartners";
import TechnologyChallenges from "../UI/TechnologyChallenges";
import Footer from "../Components/Footer";
import WeAreTecz from "../UI/WeAreTecz";
import WhatElse from "../UI/WhatElse";
import TechManagement from "../UI/TechManagement";
import MobileNav from "../UI/MobileNav";
const Main = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <BestSolution/>
      <WeAreTecz/>
      <Counter/>
      <TechManagement/>
      <OurPartners/>
      <TechnologyChallenges/>
      <WhatElse/>
      <Location/>
      <Footer/>
       
    </div>
  );
};

export default Main;
