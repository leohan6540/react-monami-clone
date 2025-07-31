import React, { useState } from "react";
import "./NavbarItem.css";

const NavbarItem = ({ title }) => {
  const [color, setColor] = useState(false);

  const className = `${color ? "nav-item" : ""}`;

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
      {title}
    </li>
  );
};

export default NavbarItem;
