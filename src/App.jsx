import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Error from "./pages/Error";
import { Toaster } from "react-hot-toast";
import UXDesigner from "./UI/UXDesigner";
import OnShoreOffShoreTeam from "./UI/OnShoreOffShoreTeam";
import ITManagement from "./UI/TalentAquisition";
import DataVisualization from "./UI/ManageConsult";
import SecuritySystem from "./UI/DataAnalysis";
import WebDevelopment from "./UI/WebDevelopment";
import ServicesLayout from "./UI/ServicesLayout";
import Careers from "./UI/Careers";
import Filters from "./UI/Filters";
import Careersdetail from "./UI/Careersdetail";
import TalentAquisition from "./UI/TalentAquisition";
import ManageConsult from "./UI/ManageConsult";
import DataAnalysis from "./UI/DataAnalysis";
import DigitalMarketing from "./UI/DigitalMarketing";
import BusinessIntelligence from "./UI/BusinessIntelligence";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/service" element={<ServicesLayout />}>
            <Route
              path="OnShoreOffShoreTeam"
              index
              element={<OnShoreOffShoreTeam />}
            />
            <Route path="TalentAquisition" element={<TalentAquisition />} />
            <Route path="ManageConsult" element={<ManageConsult />} />
            <Route path="DataAnalysis" element={<DataAnalysis />} />
            <Route path="UXDesigner" element={<UXDesigner />} />
            <Route path="WebDevelopment" element={<WebDevelopment />} />
            <Route path="DigitalMarketing" element={<DigitalMarketing />} />
            <Route
              path="BusinessIntelligence"
              element={<BusinessIntelligence />}
            />
          </Route>

          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/Careersdetail" element={<Careersdetail />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default App;
