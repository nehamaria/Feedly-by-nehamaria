import React from "react";
import HeaderBar from "./Header";
import NewsCategory from "./NewsCategory";
import { CATEGORYLIST } from "./constants";

const News = () => {
  const categories = CATEGORYLIST;
  return (
    <div>
      <HeaderBar />
      {categories.map((category) => {
        return <NewsCategory category={category} />;
      })}
    </div>
  );
};

export default News;
