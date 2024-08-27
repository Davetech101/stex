import Menu from "./Menu";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  return (
    <div className="z-[10000] relative">
      <Menu />
      <DesktopHeader/>
    </div>
  );
};

export default Header;
