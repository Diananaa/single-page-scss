import { Profile } from "../..";
import "./header.style.scss";

const Header = () => {
  return (
    <header className="flex items-center">
      <Profile />
    </header>
  );
};

export default Header;
