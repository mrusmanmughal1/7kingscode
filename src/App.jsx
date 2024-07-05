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
import WebDevelopment from "./UI/WebDevelopment";
import ServicesLayout from "./UI/ServicesLayout";
import Careers from "./UI/Careers";
import Filters from "./UI/Filters";
import QualityAnalyst from "./UI/QualityAnalyst";
import TalentAquisition from "./UI/TalentAquisition";
import ManageConsult from "./UI/ManageConsult";
import DataAnalysis from "./UI/DataAnalysis";
import DigitalMarketing from "./UI/DigitalMarketing";
import BusinessIntelligence from "./UI/BusinessIntelligence";
import ApplyForm from "./UI/ApplyForm";
import SharePointDeveloper from "./UI/SharePointDeveloper";
import BusinessAnalyst from "./UI/BusinessAnalyst";
import Products from "./pages/Products";
import ProductDetails from "./UI/ProductDetails";
import NetworkManage from "./UI/NetworkManage";
import ServerManage from "./UI/ServerManage";
import CloudServices from "./UI/CloudServices";
import DataManage from "./UI/DataManage";
import VirtualManage from "./UI/VirtualManage";
import Applicationhosting from "./UI/Applicationhosting";
import SoftwareMaintenance from "./UI/SoftwareMaintenance";
import CustomDevelop from "./UI/CustomDevelop";
import ApplicationIntegrate from "./UI/ApplicationIntegrate";
import PerformanceMonitor from "./UI/PerformanceMonitor";
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
            <Route path="NetworkManage" element={<NetworkManage />} />
            <Route path="ServerManage" element={<ServerManage />} />
            <Route path="CloudServices" element={<CloudServices />} />
            <Route path="VirtualManage" element={<VirtualManage />} />
            <Route
              path="SoftwareMaintenance"
              element={<SoftwareMaintenance />}
            />
            <Route path="DataManage" element={<DataManage />} />
            <Route path="Applicationhosting" element={<Applicationhosting />} />
            <Route path="ManageConsult" element={<ManageConsult />} />
            <Route path="CustomDevelop" element={<CustomDevelop />} />
            <Route
              path="ApplicationIntegrate"
              element={<ApplicationIntegrate />}
            />
            <Route path="DataAnalysis" element={<DataAnalysis />} />
            <Route path="PerformanceMonitor" element={<PerformanceMonitor />} />
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
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/QualityAnalyst" element={<QualityAnalyst />} />
          <Route path="/ApplyForm" element={<ApplyForm />} />
          <Route path="/ProductsDetails" element={<ProductDetails />} />

          <Route
            path="/SharePointDeveloper"
            element={<SharePointDeveloper />}
          />
          <Route path="/BusinessAnalyst" element={<BusinessAnalyst />} />

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
