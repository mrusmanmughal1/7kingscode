/* eslint-disable no-unused-vars */
import React from "react";
import MainBanner from "../UI/MainBanner";
import OurBenifits from "../UI/OurBenifits";
import BusinessGrowth from "../UI/BusinessGrowth";
import Counter from "../UI/Counter";
import TechManagement from "../UI/TechManagement";
import Header from "../Components/Header";
import SolveProblem from "../UI/SolveProblem";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <MainBanner
        text="About Us"
        title="7 Kings Code  -IT Solutions & Technology"
      />

      <OurBenifits />
      <BusinessGrowth />
      <Counter />
      <TechManagement />
      <SolveProblem />
    </div>
  );
};

export default About;
