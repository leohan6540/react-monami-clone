import React from "react";
import "./ProductItem.css";

const ProductItem = ({ src, alt }) => {
  return <img className="product-item" src={src} alt={alt} />;
};

export default ProductItem;
