import React, { useEffect, useState } from "react";
import HeaderBar from "./Header";
import newsApi from "./NewsList";
import { PageLoader } from "@bigbinary/neetoui/v2";
import NewsCategory from "./NewsCategory";

import SearchModal from "../Modal/SearchModal";
import SubscribeModal from "../Modal/SubscribeModal";
import { useHistory } from "react-router";
import { CATEGORYLIST } from "./constants";

const News = ({ isOpen, setIsOpen, setIsModalOpen, isModalOpen }) => {
  const [loading, setLoading] = useState(true);
  const [categoryNews, setCategoryNews] = useState({});
  const [submittedCategories, setSubmittedCategories] = useState(CATEGORYLIST);

  const history = useHistory();
  const fetchNews = async () => {
    try {
      setLoading(true);
      const categoryValues = await Promise.all(
        await submittedCategories.map(async (selected) => {
          return await newsApi.newsList(selected);
        })
      );
      let result = categoryValues.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.data.category]: curr.data.data,
        };
      }, {});
      console.log(result);
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
  }, [submittedCategories]);

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
        submittedCategories={submittedCategories}
        setSubmittedCategories={setSubmittedCategories}
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
