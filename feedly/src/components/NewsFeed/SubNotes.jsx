import React, { useState } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";

const SubNotes = ({ category, news }) => {
  const [shortNews, setShortNews] = useState(news.slice(4, 8));
  return (
    <div className=" flex border-t-2 border-b-2 pb-3 mt-6 grid grid-cols-2 gap-x-80 ">
      {shortNews.map((item) => {
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
              <Button
                label="Read More"
                //  onClick={function noRefCheck(){}}
                style="link"
                className="mt-1"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubNotes;
