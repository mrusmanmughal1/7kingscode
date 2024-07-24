import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
// import Login from "./pages/Loginpage";
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
import Admin from "./Feature/Admin/Admin";
import Loginpage from "./pages/Loginpage";
import ClientLayout from "./UI/Layout/ClientLayout";
import AdminLayout from "./UI/Layout/AdminLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Context/AuthContext";
import Dashboard from "./pages/Dashboard";
import JobsPosted from "./Components/JobsPosted";
import AuthLayout from "./Components/AuthLayout";
import PostNewJob from "./Components/PostNewJob";
import Settings from "./Components/Settings";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="jobs-posted" element={<JobsPosted />} />
              <Route path="new-job" element={<PostNewJob />} />
              <Route path="settings" element={<Settings />} />

              {/* Add more nested routes here */}
            </Route>
            <Route
              path="/7kctech_administration"
              element={
                <AuthLayout>
                  <Loginpage />
                </AuthLayout>
              }
            />
            {/* Client-side routes */}{" "}
            <Route
              path="/"
              element={
                <ClientLayout>
                  <Main />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/contact-us"
              element={
                <ClientLayout>
                  <Contact />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/about-us"
              element={
                <ClientLayout>
                  <About />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/services"
              element={
                <ClientLayout>
                  <Services />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/products"
              element={
                <ClientLayout>
                  <Products />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/careers"
              element={
                <ClientLayout>
                  <Careers />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/filters"
              element={
                <ClientLayout>
                  <Filters />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/QualityAnalyst"
              element={
                <ClientLayout>
                  <QualityAnalyst />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/ApplyForm"
              element={
                <ClientLayout>
                  <ApplyForm />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/ProductDetails"
              element={
                <ClientLayout>
                  <ProductDetails />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/SharePointDeveloper"
              element={
                <ClientLayout>
                  <SharePointDeveloper />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="/BusinessAnalyst"
              element={
                <ClientLayout>
                  <BusinessAnalyst />
                </ClientLayout>
              }
            />{" "}
            <Route
              path="*"
              element={
                <ClientLayout>
                  <Error />
                </ClientLayout>
              }
            />{" "}
            {/* Services nested routes */}{" "}
            <Route
              path="/service"
              element={
                <ClientLayout>
                  <ServicesLayout />
                </ClientLayout>
              }
            >
              {" "}
              <Route
                path="OnShoreOffShoreTeam"
                index
                element={
                  <ClientLayout>
                    <OnShoreOffShoreTeam />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="TalentAquisition"
                element={
                  <ClientLayout>
                    <TalentAquisition />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="NetworkManage"
                element={
                  <ClientLayout>
                    <NetworkManage />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="ServerManage"
                element={
                  <ClientLayout>
                    <ServerManage />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="CloudServices"
                element={
                  <ClientLayout>
                    <CloudServices />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="VirtualManage"
                element={
                  <ClientLayout>
                    <VirtualManage />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="SecurityMonitoring"
                element={
                  <ClientLayout>
                    <SecurityMonitoring />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="AccessManagement"
                element={
                  <ClientLayout>
                    <AccessManagement />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DataEncryption"
                element={
                  <ClientLayout>
                    <DataEncryption />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DeskServices"
                element={
                  <ClientLayout>
                    <DeskServices />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DesktopManagement"
                element={
                  <ClientLayout>
                    <DesktopManagement />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="RemoteSupport"
                element={
                  <ClientLayout>
                    <RemoteSupport />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="UserEducation"
                element={
                  <ClientLayout>
                    <UserEducation />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="TroubleShooting"
                element={
                  <ClientLayout>
                    <TroubleShooting />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DisasterRecovery"
                element={
                  <ClientLayout>
                    <DisasterRecovery />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="StorageSolutions"
                element={
                  <ClientLayout>
                    <StorageSolutions />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DataSecurity"
                element={
                  <ClientLayout>
                    <DataSecurity />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DataAnalytics"
                element={
                  <ClientLayout>
                    <DataAnalytics />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DataLifecycle"
                element={
                  <ClientLayout>
                    <DataLifecycle />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="VendorManagemnet"
                element={
                  <ClientLayout>
                    <VendorManagemnet />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="PolicyGovernance"
                element={
                  <ClientLayout>
                    <PolicyGovernance />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="CostOptimization"
                element={
                  <ClientLayout>
                    <CostOptimization />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="TechnologyDevelopment"
                element={
                  <ClientLayout>
                    <TechnologyDevelopment />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="StrategyPlanning"
                element={
                  <ClientLayout>
                    <StrategyPlanning />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="SoftwareMaintenance"
                element={
                  <ClientLayout>
                    <SoftwareMaintenance />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DataManage"
                element={
                  <ClientLayout>
                    <DataManage />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="Applicationhosting"
                element={
                  <ClientLayout>
                    <Applicationhosting />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="ManageConsult"
                element={
                  <ClientLayout>
                    <ManageConsult />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="CustomDevelop"
                element={
                  <ClientLayout>
                    <CustomDevelop />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="ApplicationIntegrate"
                element={
                  <ClientLayout>
                    <ApplicationIntegrate />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="PerformanceMonitor"
                element={
                  <ClientLayout>
                    <PerformanceMonitor />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="UXDesigner"
                element={
                  <ClientLayout>
                    <UXDesigner />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="WebDevelopment"
                element={
                  <ClientLayout>
                    <WebDevelopment />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="DigitalMarketing"
                element={
                  <ClientLayout>
                    <DigitalMarketing />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="RiskManagement"
                element={
                  <ClientLayout>
                    <RiskManagement />
                  </ClientLayout>
                }
              />{" "}
              <Route
                path="CyberSecurityManage"
                element={
                  <ClientLayout>
                    <CyberSecurityManage />
                  </ClientLayout>
                }
              />{" "}
            </Route>{" "}
            {/* Admin-side routes */}{" "}
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Admin />
                </AdminLayout>
              }
            />{" "}
          </Routes>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 5000 },
              error: { duration: 5000 },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "black",
              },
            }}
          />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
