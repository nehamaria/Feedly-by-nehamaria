import React, { useEffect, useState } from "react";
import HeaderBar from "./Header";
import newsApi from "./NewsList";
import { PageLoader } from "@bigbinary/neetoui/v2";
import NewsCategory from "./NewsCategory";

import SearchModal from "../Modal/SearchModal";
import SubscribeModal from "../Modal/SubscribeModal";
import { useHistory } from "react-router";

const News = ({ isOpen, setIsOpen, setIsModalOpen, isModalOpen }) => {
  const [loading, setLoading] = useState(true);
  const [categoryNews, setCategoryNews] = useState({});
  const history = useHistory();
  const fetchNews = async () => {
    try {
      const categoryValues = await Promise.all([
        newsApi.newsList("national"),
        newsApi.newsList("sports"),
        newsApi.newsList("business"),
        newsApi.newsList("world"),
        newsApi.newsList("science"),
        newsApi.newsList("technology"),
      ]);
      // console.log(categoryValues);
      let result = categoryValues.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.data.category]: curr.data.data,
        };
      }, {});
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
  }, []);

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
        news={categoryNews}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/* {categories.map((category) => {
        return <NewsCategory category={category} />;
      })} } */}
      <NewsCategory categoryNews={categoryNews} />
      <SearchModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categoryNews={categoryNews}
      />
      <SubscribeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default News;
