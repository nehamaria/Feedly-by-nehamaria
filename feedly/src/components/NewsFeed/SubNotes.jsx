import React, { useEffect, useState } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
import removeSpecialCharaters from "../Helper";

const SubNotes = ({ category, news }) => {
  const [shortNews, setShortNews] = useState(news.slice(4, 8));
  useEffect(() => {
    setShortNews(news.slice(4, 8));
  }, [news]);
  return (
    <div className="border-t-2 border-b-2 pb-3 mt-6 grid grid-cols-2 gap-x-80 ">
      {shortNews.map((item) => {
        console.log(item);
        return (
          <div className=" mt-6  flex ">
            <img src={item.imageUrl} className=" object-cover h-20 w-25" />
            <div className="flex flex-col items-start w-100 ml-3">
              <Typography style="h6" className="text-justify">
                {item.title}
              </Typography>
              <Typography
                style="body3"
                className=" text-left neeto-ui-text-gray-500 self-end"
              >
                {item.author} at {item.time} on {item.date}
              </Typography>
              <Link
                to={`/articlesFeed/${category}/${removeSpecialCharaters(
                  item.title
                )}`}
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
