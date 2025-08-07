import React from "react";
import "./ProductImage.css";

const ProductImage = ({ src, alt, ariaLabel }) => {
  return (
    <img
      className="product-img"
      src={src}
      alt={alt}
      aria-label={ariaLabel}
      width={260}
      height={390}
    />
  );
};

export default ProductImage;
