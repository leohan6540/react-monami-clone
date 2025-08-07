import React from "react";
import ProductTitle from "../../../Atoms/main/BestProduct/ProductTitle";
import ProductSubTitle from "../../../Atoms/main/BestProduct/ProductSubTitle";
import "./ProductInfo.css";

const ProductInfo = ({ title, subtitle }) => {
  return (
    <div className="product-title">
      <ProductTitle productTitle={title} />
      <ProductSubTitle productSubtitle={subtitle} />
    </div>
  );
};

export default ProductInfo;
