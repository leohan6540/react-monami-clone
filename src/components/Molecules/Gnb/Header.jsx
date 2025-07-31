import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-utils">
        <div>
          <img src="/imgi_35_lang_kor.gif" alt="한국어 아이콘" />
          <span>Kor</span>
        </div>
        <div className="sns-icon">
          <a href="#">
            <img src="imgi_3_sns_facebook.gif" alt="sns아이콘" />
          </a>
          <a href="#">
            <img src="imgi_3_sns_facebook.gif" alt="sns아이콘" />
          </a>
          <a href="#">
            <img src="imgi_3_sns_facebook.gif" alt="sns아이콘" />
          </a>
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
