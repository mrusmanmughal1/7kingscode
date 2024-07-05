import HeaderMain from "../UI/HeaderMain";
import MobileNav from "../UI/MobileNav";

const Header = () => {
  return (
    <div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block">
        <HeaderMain />
      </div>
    </div>
  );
};

export default Header;
