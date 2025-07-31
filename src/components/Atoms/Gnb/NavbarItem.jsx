import React, { useState } from "react";
import "./NavbarItem.css";

const NavbarItem = ({ title }) => {
  const [color, setColor] = useState(false);

  const className = `nav-item ${color ? "nav-item-color" : ""}`;
  //const className = color && "nav-item";

  const handleMouseOver = () => {
    setColor(true);
  };

  const handleMouseOut = () => {
    setColor(false);
  };

  return (
    <li
      className={className}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h3>{title}</h3>
    </li>
  );
};

export default NavbarItem;
