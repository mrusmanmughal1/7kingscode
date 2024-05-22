import Header from "../Components/Header";
import MainBanner from "../UI/MainBanner";
import ContactForm from "../UI/ContactForm";

const Contact = () => {
  return (
    <div>
      <MainBanner
        text="Contact"
        title="7 Kings Code  -IT Solutions & Technology"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
