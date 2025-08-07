import React from "react";
import ProductItems from "../../Molecules/main/ProductItems";
import "./ProductGrid.css";
import TitleSection from "../../Molecules/main/TitleSection";

const ProductGrid = () => {
  const newArrivalsTitle = "NEW ARRIVALS";
  const newArrivalsSubtitle = "가장 먼저 만나는 설레는 기다림";

  return (
    <div className="product-grid">
      <TitleSection
        title={newArrivalsTitle}
        subtitle={newArrivalsSubtitle}
        isSplit={true}
      />
      <ProductItems />
    </div>
  );
};

export default ProductGrid;
