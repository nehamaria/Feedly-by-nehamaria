import React, { useEffect, useState } from "react";
import { Typography, PageLoader, Button } from "@bigbinary/neetoui/v2";
// import newsApi from "./NewsList";
import SubNotes from "./SubNotes";
import { Link } from "react-router-dom";
import removeSpecialCharaters from "../Helper";

function NewsCategory({ categoryNews }) {
  // const [loading, setLoading] = useState(true);
  // const [news, setNews] = useState([]);
  // console.log(news);
  // const fetchNews = async () => {
  //   try {
  //     const response = await newsApi.newsList(category);
  //     console.log(response.data.data);
  //     setNews(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // setLoading(true);
  //   fetchNews();
  // }, []);
  // if (loading) {
  //   return (
  //     <div className="w-screen h-screen">
  //       <PageLoader />
  //     </div>
  //   );
  // }
  // console.log(news[0].title);
  console.log(categoryNews);
  return Object.keys(categoryNews).map((category, index) => {
    return (
      <div key={index} className=" border-b2 mt-20 mx-40 ">
        <Typography style="h2" className=" text-left">
          {category.split("")[0].toUpperCase() + category.slice(1)} News
        </Typography>
        <div className="flex mt-6 ">
          <img src="https://picsum.photos/526/263" />
          <div className="flex flex-col items-start ml-5 ">
            <Typography style="h3" className="  text-justify">
              {categoryNews[category][0].title}
            </Typography>
            <Typography
              style="body3"
              className=" text-right neeto-ui-text-gray-500 self-end"
            >
              {categoryNews[category][0].author} at
              {categoryNews[category][0].time} on
              {categoryNews[category][0].date}
            </Typography>

            <Typography
              style="body3"
              className="  neeto-ui-text-gray-700 text-justify mt-2"
            >
              {categoryNews[category][0].content}
            </Typography>
            <Link
              to={{
                pathname: `/articlesFeed/${category}/${removeSpecialCharaters(
                  categoryNews[category][0].title
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
    );
  });
}

export default NewsCategory;
