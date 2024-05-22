import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
