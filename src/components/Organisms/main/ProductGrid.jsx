import React from "react";
import ProductItems from "../../Molecules/main/ProductItems";
import "./ProductGrid.css";
import NewArrivalSection from "../../Molecules/main/NewArrivalSection";

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <NewArrivalSection />
      <ProductItems />;
    </div>
  );
};

export default ProductGrid;
