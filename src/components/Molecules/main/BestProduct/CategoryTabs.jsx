import React from "react";
import TabButton from "../../../Atoms/main/BestProduct/TabButton";
import { TAB_LABELS } from "../../../../constants/TAB_LABELS";
import "./CategoryTabs.css";

const CategoryTabs = () => {
  return (
    <div className="tab-label">
      {TAB_LABELS.map((label) => {
        return <TabButton tabLabel={label} />;
      })}
    </div>
  );
};

export default CategoryTabs;
