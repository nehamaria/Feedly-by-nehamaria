import React, { useState, useCallback } from "react";

import Modal from "./Modal";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Search = ({ isOpen, setIsOpen, categoryNews }) => {
  const [result, setResult] = useState([]);
  const newsList = Object.keys(categoryNews).reduce((acc, curr) => {
    const categoryNewsList = categoryNews[curr].map((news) => ({
      ...news,
      category: curr,
    }));

    return [...acc, ...categoryNewsList];
  }, []);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 200);
    };
  };

  const search = (value) => {
    if (!value.length) {
      setResult([]);
      return;
    }

    const obj = newsList.filter((item, idx) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setResult(obj);
  };

  const handleOnChange = (e) => {
    search(e.target.value);
  };
  const handleSearch = useCallback(debounce(handleOnChange), []);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <SearchBar handleSearch={handleSearch} />
      <SearchResult
        result={result}
        setIsOpen={setIsOpen}
        categoryNews={categoryNews}
      />
    </Modal>
  );
};

export default Search;
