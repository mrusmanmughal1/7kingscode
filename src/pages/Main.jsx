import Header from "../Components/Header";
import BestSolution from "../UI/BestSolution";
import Counter from "../UI/Counter";
import Hero from "../UI/Hero";
import Location from "../UI/Location";
import OurPartners from "../UI/OurPartners";
import TechnologyChallenges from "../UI/TechnologyChallenges";
import Footer from "../Components/Footer";
import WeAreTecz from "../UI/WeAreTecz";
const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Hero/> */}
      <BestSolution/>
      <WeAreTecz/>
      <Counter/>
      <OurPartners/>
      <TechnologyChallenges/>
      <Location/>
      <Footer/>
    </div>
  );
};

export default Main;
