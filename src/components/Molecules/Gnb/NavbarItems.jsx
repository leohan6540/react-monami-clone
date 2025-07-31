import NavbarItem from "../../Atoms/Gnb/NavbarItem";
import "./NavbarItems.css";
import { NAV_TITLES } from "../../../constants/NAV_TITLES";

const NavbarItems = () => {
  return (
    <div>
      <ul className="navbar-menu">
        {NAV_TITLES.map((title, idx) => (
          <NavbarItem key={idx} title={title} />
        ))}
      </ul>
    </div>
  );
};

export default NavbarItems;
