import React from "react";
import NavbarItems from "../../Molecules/Gnb/NavbarItems";
import SearchControls from "../../Molecules/Gnb/SearchControls";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#">
        <img src="/imgi_6_logo.jpg" alt="모나미 로고" />
      </a>
      <NavbarItems />
      <SearchControls />
    </div>
  );
};

export default Navbar;
