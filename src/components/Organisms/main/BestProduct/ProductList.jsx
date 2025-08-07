import React from "react";
import { BEST_PRODUCT_IMAGES_INFOS } from "../../../../constants/BEST_PRODUCT_IMAGES_INFOS";
import ProductCard from "../../../Molecules/main/BestProduct/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="best-product-list">
      {BEST_PRODUCT_IMAGES_INFOS.map(
        ({ src, alt, ariaLabel, title, subtitle }) => {
          return (
            <ProductCard
              src={src}
              alt={alt}
              aria-label={ariaLabel}
              title={title}
              subtitle={subtitle}
            />
          );
        }
      )}
    </div>
  );
};

export default ProductList;
