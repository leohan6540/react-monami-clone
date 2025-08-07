import React from "react";
import TitleSection from "../../../Molecules/main/TitleSection";
import CategoryTabs from "../../../Molecules/main/BestProduct/CategoryTabs";
import ProductList from "./ProductList";
import "./BestProductSection.css";

const BestProductSection = () => {
  return (
    <div className="best-section">
      <TitleSection
        title="BEST PRODUCT"
        subtitle="언제 어디서나 생활 속에 함께하는 모나미"
      />
      <CategoryTabs />
      <ProductList />
    </div>
  );
};

export default BestProductSection;
