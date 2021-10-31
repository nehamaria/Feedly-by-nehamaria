import React, { useState, useEffect } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";

import articleimage from "../../assets/NoArticle.png";
import FeedBack from "./FeedBack";
import SubNotes from "../NewsFeed/SubNotes";
import newsApi from "../NewsFeed/NewsList";

const ArticleNotFound=()=> {
  const [showFeedBack, setShowFeedBack] = useState(false);
  const [subNewsList, setSubNewsList] = useState({});

  const fetchArticles = async (values) => {
    try {
      const newsList = await newsApi.newsList("all");
      setSubNewsList({ all: newsList.data.data });

      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="flex w-full justify-center px-4">
        <div className="space-y-20 mt-10 w-full max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-5 ">
            <div className="mt-20  ">
              <img src={articleimage} />
            </div>
            <Typography style="h3">No News Articles Found</Typography>
            <Button
              icon={() => <Highlight className="mr-2" />}
              iconPosition="left"
              label="Write to us"
              style="secondary"
              onClick={() => setShowFeedBack(true)}
            />
            <SubNotes news={subNewsList} category="all" />
          </div>
        </div>
      </div>
      <FeedBack setShowFeedBack={setShowFeedBack} showFeedBack={showFeedBack} />
    </>
  );
}

export default ArticleNotFound;
