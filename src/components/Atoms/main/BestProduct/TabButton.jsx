import React from "react";
import "./TabButton.css";

const TabButton = ({ tabLabel }) => {
  return <button className="tab-button">{tabLabel}</button>;
};

export default TabButton;
