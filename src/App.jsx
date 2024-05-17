import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact-us" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
