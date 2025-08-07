import React from "react";
import ProductInfo from "./ProductInfo";
import { BEST_PRODUCT_IMAGES_INFOS } from "../../../../constants/BEST_PRODUCT_IMAGES_INFOS";
import "./ProductCard.css";
import ProductImage from "../../../Atoms/main/BestProduct/ProductImage";

const ProductCard = ({ src, alt, ariaLabel, title, subtitle }) => {
  return (
    <div className="best-product">
      <ProductImage src={src} alt={alt} aria-label={ariaLabel} />
      <ProductInfo title={title} subtitle={subtitle} />
    </div>
  );
};

export default ProductCard;
