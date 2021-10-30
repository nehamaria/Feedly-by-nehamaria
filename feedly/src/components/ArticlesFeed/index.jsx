import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { loremIpsum } from "react-lorem-ipsum";
import { PageLoader, Typography, Tag } from "@bigbinary/neetoui/v2";
import { Copy } from "@bigbinary/neeto-icons";

import SubNotes from "../NewsFeed/SubNotes";
import removeSpecialCharaters from "../Helper";
import HeaderBar from "../NewsFeed/Header";
import Search from "../Search";
import newsApi from "../NewsFeed/NewsList";
import Filter from "../Filter";

const Articles = ({
  isOpen,
  setIsOpen,
  submittedCategories,
  setSubmittedCategories,
  showArchivedNews,
  setShowArchivedNews,
}) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [iconNews, setIconNews] = useState([]);
  const [showPane, setShowPane] = useState(false);
  const { categoryNews } = useLocation().state;
  const { category, title } = useParams();
  const fetchArticles = async () => {
    try {
      const response = await newsApi.newsList(category);
      const articleIndex = response.data.data.findIndex(
        (news) => removeSpecialCharaters(news.title) === title
      );
      setArticle(response.data.data[articleIndex]);
      let subNewsList = response.data.data;
      setIconNews(subNewsList.filter((_, idx) => idx !== articleIndex));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [category, title]);
  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="">
      <HeaderBar setIsOpen={setIsOpen} setShowPane={setShowPane} />
      <div className="flex w-full justify-center px-4">
        <div className=" mt-10 w-full max-w-6xl">
          <div className=" flex  space-x-3 ">
            {submittedCategories.map((category, idx) => {
              return (
                <Tag
                  key={idx}
                  label={category}
                  onClose={() => {
                    setSubmittedCategories(
                      submittedCategories.filter((name) => name !== category)
                    );
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-15 mt-5 text-justify px-40">
        <div className="space-x-4 inline">
          <Typography style="h1" className="inline">
            {article.title}
          </Typography>
          <Copy
            className="inline neeto-ui-text-gray-600"
            onClick={() => {
              navigator.clipboard.writeText(article.readMoreUrl);
            }}
          />
        </div>
        <Typography
          style="body3"
          className="  pt-1 pb-4 neeto-ui-text-gray-500"
        >
          {article.date}
        </Typography>
        <img src={article.imageUrl} className="w-3/6 ml-auto mr-auto " />
        <div className="space-y-4 mt-3 pt-2">
          <Typography style="body1" className="  pt-1 neeto-ui-text-gray-800">
            {article.content}
          </Typography>

          {loremIpsum({ p: 3 }).map((text, idx) => (
            <Typography style="body1" key={idx}>
              {text}
            </Typography>
          ))}
        </div>
        <SubNotes category={category} news={categoryNews} />
      </div>

      <Search
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categoryNews={categoryNews}
      />
      <Filter
        showPane={showPane}
        setShowPane={setShowPane}
        submittedCategories={submittedCategories}
        setSubmittedCategories={setSubmittedCategories}
        showArchivedNews={showArchivedNews}
        setShowArchivedNews={setShowArchivedNews}
      />
    </div>
  );
};

export default Articles;
