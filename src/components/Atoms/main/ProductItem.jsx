import { useState } from "react";
import "./ProductItem.css";

const ProductItem = ({ src, alt, redBoxTitle, redBoxSubTitle }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div
      className="product-item-wrap"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}
    >
      <img className={`product-item`} src={src} alt={alt} />
      <div className={`product-item-red-box ${isHover && "is-hover"}`}>
        <span className="red-box-title">{redBoxTitle}</span>
        <span className="red-box-sub-title">{redBoxSubTitle}</span>
        <span className="red-box-cross">+</span>
      </div>
    </div>
  );
};

export default ProductItem;
