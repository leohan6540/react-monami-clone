import NavbarItem from "../../Atoms/Gnb/NavbarItem";
import "./NavbarItems.css";
import { NAV_TITLES } from "../../../constants/NAV_TITLES";

const NavbarItems = () => {
  return (
    <ul className="navbar-menu">
      {NAV_TITLES.map((title) => (
        <NavbarItem key={title.id} title={title.name} />
      ))}
    </ul>
  );
};

export default NavbarItems;
