import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Error from "./pages/Error";
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
<<<<<<< HEAD
          <Route path="/services/:id" element={<Services />} />
=======
          <Route path="*" element={<Error />} />

>>>>>>> efb1e6d26eba79ff07ddb32ee54aa12de70a0547
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
