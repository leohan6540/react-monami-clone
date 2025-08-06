import React, { useState } from "react";
import "./Language.css";
import { LANGUAGES } from "../../../constants/LANGUAGES";

const Language = () => {
  const [langChoice, setLangChoice] = useState("Kor");
  const [isDropDown, setIsDropDown] = useState(false);

  const handleClick = () => {
    setIsDropDown(!isDropDown);
  };

  const handleLanguageChoice = (lang) => {
    setLangChoice(lang);
    setIsDropDown(false);
  };

  const currentLang =
    LANGUAGES.find((item) => item.lang === langChoice) || LANGUAGES[0];
  //test code
  //console.log(currentLang);

  return (
    <div className={`custom-dropdown  ${isDropDown ? "active" : ""}`}>
      <div onClick={handleClick} className="selected-item ">
        <img
          src={currentLang?.src}
          alt={currentLang?.alt}
          aria-label={currentLang?.ariaLabel}
        />
        <span>{currentLang?.lang}</span>
      </div>

      {isDropDown && (
        <ul className="dropdown-lists">
          {LANGUAGES.filter((item) => item !== currentLang).map((item) => (
            <li
              key={item?.lang}
              value={langChoice}
              onClick={() => handleLanguageChoice(item?.lang)}
              className="dropdown-list"
            >
              <img src={item.src} alt={item.alt} aria-label={item.ariaLabel} />
              <span>{item.lang}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
