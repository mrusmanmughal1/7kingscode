import Header from "../Components/Header";
import BestSolution from "../UI/BestSolution";
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import WeAreTecz from "../UI/WeAreTecz";
import OurPartners from '../UI/OurPartners'
import TechnologyChallenges from "../UI/TechnologyChallenges";
const Main = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <BestSolution/>
      <WeAreTecz/>
      <Counter/>
      <TechnologyChallenges/>
      <OurPartners/>
    </div>
  );
};

export default Main;
