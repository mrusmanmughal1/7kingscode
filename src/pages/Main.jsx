import Header from "../Components/Header";
import BestSolution from "../UI/BestSolution";
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import WeAreTecz from "../UI/WeAreTecz";
import OurPartners from '../UI/OurPartners'
import TechnologyChallenges from "../UI/TechnologyChallenges";
import Footer from "../Components/Footer";
const Main = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <BestSolution/>
      <WeAreTecz/>
      <Counter/>
      <OurPartners/>
      <TechnologyChallenges/>
      <Footer/>
    </div>
  );
};

export default Main;
