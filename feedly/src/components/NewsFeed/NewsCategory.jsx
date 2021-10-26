import React, { useEffect, useState } from "react";
import { Typography, PageLoader, Button } from "@bigbinary/neetoui/v2";
import newsApi from "./NewsList";
import SubNotes from "./SubNotes";

function NewsCategory({ category }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await newsApi.newsList(category);
      console.log(response.data.data);
      setNews(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className=" border-b2 mt-20 mx-40 ">
      <Typography style="h2" className=" text-left">
        {category.split("")[0].toUpperCase() + category.slice(1)} News
      </Typography>
      <div className="flex mt-6 ">
        <img src="https://picsum.photos/526/263" />
        <div className="flex flex-col items-start ml-5 ">
          <Typography style="h3" className="  text-justify">
            {news[0].title}
          </Typography>
          <Typography
            style="body3"
            className=" text-right neeto-ui-text-gray-500 self-end"
          >
            {news[0].author} at {news[0].time} on {news[0].date}
          </Typography>

          <Typography
            style="body3"
            className="  neeto-ui-text-gray-700 text-justify mt-2"
          >
            {news[0].content}
          </Typography>
          <Button
            label="Read More"
            //  onClick={function noRefCheck(){}}
            style="link"
            className="mt-4"
          />
        </div>
      </div>
      <SubNotes category={category} news={news} />
    </div>
  );
}

export default NewsCategory;
