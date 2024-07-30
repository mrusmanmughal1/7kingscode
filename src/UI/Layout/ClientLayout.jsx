import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const ClientLayout = ({ children }) => {
  return (
    <div className="">
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default ClientLayout;
