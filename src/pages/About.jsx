/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "../UI/MainBanner";
import OurBenifits from "../UI/OurBenifits";
import BusinessGrowth from "../UI/BusinessGrowth";
import Counter from "../UI/Counter";
import TechManagement from "../UI/TechManagement";
import SolveProblem from "../UI/SolveProblem";
import BestSolution from "../UI/BestSolution";
import CounterMini from "../UI/CounterMini";

const About = () => {
  return (
    <div>
      <MainBanner
        text="About Us"
        title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
      />

      <OurBenifits />
      <CounterMini/>
      <BestSolution />
      <SolveProblem />
    </div>
  );
};

export default About;
