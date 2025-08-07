import React from "react";

const SectionTitle = ({ title, isSplit }) => {
  if (isSplit) {
    const str = title;
    const splitTitle = str.split(" ");

    return (
      <h2>
        {splitTitle[0]} <br />
        {splitTitle[1]}
      </h2>
    );
  } else {
    return <h2>{title}</h2>;
  }
};

export default SectionTitle;
