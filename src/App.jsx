import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
