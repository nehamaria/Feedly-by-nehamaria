import React, { useEffect, useState } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
import removeSpecialCharaters from "../Helper";

const SubNotes = ({ news, category }) => {
  const [shortNews, setShortNews] = useState(news[category].slice(4, 8));
  useEffect(() => {
    setShortNews(news[category].slice(4, 8));
  }, [news]);
  return (
    <div className="border-t-2 border-b-2 pb-3 mt-6 grid grid-cols-2 gap-x-80 ">
      {shortNews.map((item) => {
        // console.log(item);
        return (
          <div className=" mt-6 space-x-4 flex ">
            <img
              src={item.imageUrl}
              className=" flex-shrink-0 object-cover h-24 w-24"
            />
            <div className="flex flex-col space-y-1 items-start w-full max-w-md ">
              <Typography style="h6" className="text-justify">
                {item.title}
              </Typography>
              <Typography
                style="body3"
                className=" text-left neeto-ui-text-gray-500 "
              >
                {item.author} at {item.time} on {item.date}
              </Typography>
              <Link
                to={{
                  pathname: `/articlesFeed/${category}/${removeSpecialCharaters(
                    item.title
                  )}`,
                  state: { categoryNews: news },
                }}
              >
                <Button label="Read More" size="default" style="link" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubNotes;
