import React from "react";
import SectionTitle from "../../Atoms/main/SectionTitle";
import SectionSubTitle from "../../Atoms/main/SectionSubTitle";
import "./TitleSection.css";

const TitleSection = ({ title, subtitle, isSplit }) => {
  return (
    <div
      className={`title-section ${
        title === "BEST PRODUCT" && "best-product-title"
      }`}
    >
      <SectionTitle title={title} isSplit={isSplit} />
      <hr />
      <SectionSubTitle subtitle={subtitle} />
    </div>
  );
};

export default TitleSection;
