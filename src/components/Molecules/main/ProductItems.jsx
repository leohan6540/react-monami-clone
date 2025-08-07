import React from "react";
import ProductItem from "../../Atoms/main/ProductItem";
import { SECTION_PRODUCT_IMAGES } from "../../../constants/SECTION_PRODUCT_IMAGES";

const ProductItems = () => {
  return (
    <>
      {SECTION_PRODUCT_IMAGES.map(
        ({ src, alt, id, redBoxTitle, redBoxSubTitle }) => (
          <div className={id} key={id}>
            <ProductItem
              src={src}
              alt={alt}
              redBoxTitle={redBoxTitle}
              redBoxSubTitle={redBoxSubTitle}
            />
          </div>
        )
      )}
    </>
  );
};

export default ProductItems;
