import React from "react";
import "./Header.css";
import { HEADER_SNS_LOGO } from "../../../constants/HEADER_SNS_LOGO";
import Language from "../../Atoms/Gnb/Language";

const Header = () => {
  return (
    <div className="header">
      <div className="header-utils">
        <Language />

        <div className="sns-icon">
          {HEADER_SNS_LOGO.map((logo) => (
            <img key={logo.id} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
      <div className="header-links">
        <span>HOME</span>
        <hr />
        <span>SITE MAP</span>
        <hr />
        <span>CONTACT US</span>
      </div>
    </div>
  );
};

export default Header;
