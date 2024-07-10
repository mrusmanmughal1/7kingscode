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
import DigitalMarketing from "./UI/DigitalMarketing";
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
import CyberSecurityManage from "./UI/CyberSecurityManage";
import RiskManagement from "./UI/RiskManagement";
import SecurityMonitoring from "./UI/SecurityMonitoring";
import AccessManagement from "./UI/AccessManagement";
import DataEncryption from "./UI/DataEncryption";
import DeskServices from "./UI/DeskServices";
import DesktopManagement from "./UI/DesktopManagement";
import RemoteSupport from "./UI/RemoteSupport";
import UserEducation from "./UI/UserEducation";
import TroubleShooting from "./UI/TroubleShooting";
import DisasterRecovery from "./UI/DisasterRecovery";
import StorageSolutions from "./UI/StorageSolutions";
import DataSecurity from "./UI/DataSecurity";
import DataAnalytics from "./UI/DataAnalytics";
import DataLifecycle from "./UI/DataLifecycle";
import StrategyPlanning from "./UI/StrategyPlanning";
import TechnologyDevelopment from "./UI/TechnologyDevelopment";
import VendorManagemnet from "./UI/VendorManagemnet";
import PolicyGovernance from "./UI/PolicyGovernance";
import CostOptimization from "./UI/CostOptimization";
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
            <Route path="SecurityMonitoring" element={<SecurityMonitoring />} />
            <Route path="AccessManagement" element={<AccessManagement />} />
            <Route path="DataEncryption" element={<DataEncryption />} />
            <Route path="DeskServices" element={<DeskServices />} />
            <Route path="DesktopManagement" element={<DesktopManagement />} />
            <Route path="RemoteSupport" element={<RemoteSupport />} />
            <Route path="UserEducation" element={<UserEducation />} />
            <Route path="TroubleShooting" element={<TroubleShooting />} />
            {/* <Route path="DisasterRecovery" element={<DisasterRecovery />} /> */}
            {/* <Route path="StorageSolutions" element={<StorageSolutions />} /> */}
            {/* <Route path="DataSecurity" element={<DataSecurity />} /> */}
            {/* <Route path="DataAnalytics" element={<DataAnalytics />} /> */}
            {/* <Route path="DataLifecycle" element={<DataLifecycle />} /> */}
            {/* <Route path="VendorManagemnet" element={<VendorManagemnet />} /> */}
            {/* <Route path="PolicyGovernance" element={<PolicyGovernance />} /> */}
            {/* <Route path="CostOptimization" element={<CostOptimization />} /> */}
            {/* <Route
              path="TechnologyDevelopment"
              element={<TechnologyDevelopment />}
            /> */}
            {/* <Route path="StrategyPlanning" element={<StrategyPlanning />} /> */}
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

            <Route path="PerformanceMonitor" element={<PerformanceMonitor />} />
            <Route path="UXDesigner" element={<UXDesigner />} />
            <Route path="WebDevelopment" element={<WebDevelopment />} />
            <Route path="DigitalMarketing" element={<DigitalMarketing />} />
            <Route path="RiskManagement" element={<RiskManagement />} />
            <Route
              path="CyberSecurityManage"
              element={<CyberSecurityManage />}
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
