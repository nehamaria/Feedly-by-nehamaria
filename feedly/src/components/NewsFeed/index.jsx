import React, { useEffect, useState } from "react";
import { PageLoader, Tag } from "@bigbinary/neetoui/v2";

import HeaderBar from "./Header";
import NewsCategory from "./NewsCategory";
import newsApi from "./NewsList";
import Search from "components/Search";
import SubscribeModal from "components/Modal/SubscribeModal";
import Filter from "components/Filter";
import ArticleNotFound from "components/ArticleNotFound";

const News = ({
  isOpen,
  setIsOpen,
  setIsModalOpen,
  isModalOpen,
  submittedCategories,
  setSubmittedCategories,
  showArchivedNews,
  setShowArchivedNews,
}) => {
  const [loading, setLoading] = useState(true);
  const [categoryNews, setCategoryNews] = useState({});
  const [showPane, setShowPane] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const categoryValues = await Promise.all(
        await submittedCategories.map(async (selected) => {
          if (selected !== "archived") return await newsApi.newsList(selected);
        })
      );
      let result = categoryValues.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.data.category]: curr.data.data,
        };
      }, {});
      if (!showArchivedNews) {
        let date = new Date();
        let today = date.getDate();
        result = categoryValues.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.data.category]: curr.data.data.filter(
              ({ date }) =>
                date.split(",")[0].split(" ")[0] === today.toString()
            ),
          };
        }, {});
      }
      setCategoryNews(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [submittedCategories, showArchivedNews]);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <HeaderBar
        setIsOpen={setIsOpen}
        setIsModalOpen={setIsModalOpen}
        setShowPane={setShowPane}
      />
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

      {submittedCategories.length ? (
        <NewsCategory categoryNews={categoryNews} />
      ) : (
        <ArticleNotFound />
      )}

      <Search
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categoryNews={categoryNews}
      />
      <SubscribeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
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

export default News;
