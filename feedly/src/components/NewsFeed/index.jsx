import React, { useEffect, useState } from "react";
import HeaderBar from "./Header";
import newsApi from "./NewsList";
import { PageLoader, Tag } from "@bigbinary/neetoui/v2";
import NewsCategory from "./NewsCategory";
import FilterPane from "./FilterPane";

import SearchModal from "../Modal/SearchModal";
import SubscribeModal from "../Modal/SubscribeModal";
import { useHistory } from "react-router";
import { CATEGORYLIST } from "./constants";
import Search from "../Search";

const News = ({ isOpen, setIsOpen, setIsModalOpen, isModalOpen }) => {
  const [loading, setLoading] = useState(true);
  const [categoryNews, setCategoryNews] = useState({});
  const [submittedCategories, setSubmittedCategories] = useState(CATEGORYLIST);
  const [showPane, setShowPane] = useState(false);
  const [showArchivedNews, setShowArchivedNews] = useState(false);

  const history = useHistory();
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
        console.log(today.toString());
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
      history.push("/ErrorBoundaries");
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
      {submittedCategories.map((category, idx) => {
        <Tag
          key={idx}
          label={category}
          onClose={() => {
            setSubmittedCategories(
              submittedCategories.filter((name) => name !== category)
            );
          }}
        />;
      })}

      <NewsCategory categoryNews={categoryNews} />
      <Search
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categoryNews={categoryNews}
      />
      <SubscribeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <FilterPane
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
