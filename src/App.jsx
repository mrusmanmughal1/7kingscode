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
import CloudService from "./UI/CloudService";
import ITManagement from "./UI/ITManagement";
import DataVisualization from "./UI/DataVisualization";
import SecuritySystem from "./UI/SecuritySystem";
import WebDevelopment from "./UI/WebDevelopment";
import ServicesLayout from "./UI/ServicesLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/service" element={<ServicesLayout />}>
            <Route path="cloudservice" index element={<CloudService />} />
            <Route path="ITManagement" element={<ITManagement />} />
            <Route path="DataVisualization" element={<DataVisualization />} />
            <Route path="SecuritySystem" element={<SecuritySystem />} />
            <Route path="UXDesigner" element={<UXDesigner />} />
            <Route path="WebDevelopment" element={<WebDevelopment />} />
          </Route>

          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />

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
