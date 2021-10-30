import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, PageLoader, Button } from "@bigbinary/neetoui/v2";

import SubNotes from "./SubNotes";
import removeSpecialCharaters from "../Helper";

function NewsCategory({ categoryNews }) {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-20 mt-10 w-full max-w-6xl">
        {Object.keys(categoryNews).map((category, index) => {
          const mainNewsDetails = categoryNews[category][0];
          return mainNewsDetails ? (
            <div key={index} className=" border-b2  w-full ">
              <Typography style="h2" className=" text-left">
                {category.split("")[0].toUpperCase() + category.slice(1)} News
              </Typography>
              <div className="flex mt-6 ">
                <img src="https://picsum.photos/526/263" />
                <div className="flex flex-col items-start ml-5 ">
                  <Typography style="h3" className="  text-justify">
                    {mainNewsDetails.title}
                  </Typography>
                  <Typography
                    style="body3"
                    className=" text-right neeto-ui-text-gray-500 self-end"
                  >
                    {mainNewsDetails.author} at {mainNewsDetails.time} on{" "}
                    {mainNewsDetails.date}
                  </Typography>

                  <Typography
                    style="body3"
                    className="  neeto-ui-text-gray-700 text-justify mt-2"
                  >
                    {mainNewsDetails.content}
                  </Typography>
                  <Link
                    to={{
                      pathname: `/articlesFeed/${category}/${removeSpecialCharaters(
                        mainNewsDetails.title
                      )}`,
                      state: { categoryNews: categoryNews },
                    }}
                  >
                    <Button label="Read More" size="default" style="link" />
                  </Link>
                </div>
              </div>
              <SubNotes news={categoryNews} category={category} />
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCategory;
