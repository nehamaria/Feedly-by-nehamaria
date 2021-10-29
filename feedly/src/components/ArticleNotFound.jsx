import React from "react";
import articleimage from "../Assets/Vector.png";
import HeaderBar from "./NewsFeed/Header";
import { Typography } from "@bigbinary/neetoui/v2";

function ArticleNotFound() {
  return (
    <div>
      <HeaderBar />
      <div className="flex flex-col items-center justify-center  ">
        <div className="mt-52 pb-16 ">
          <img src={articleimage} />
        </div>
        <Typography style="h3">No News Articles Found</Typography>
      </div>
    </div>
  );
}

export default ArticleNotFound;
