import FooterBottom from "../UI/FooterBottom";
import FooterMain from "../UI/FooterMain";
import WeAreOffering from "../UI/WeAreOffering";

const Footer = () => {
  return (
    <div>
      <WeAreOffering />
      <div className=" border-gray-900 border-[1px]"></div>
      <FooterMain />
      <FooterBottom />
    </div>
  );
};

export default Footer;
