import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Error from "./pages/Error";
import UXDesigner from "./UI/UXDesigner";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/uxdesigner" element={<UXDesigner />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
