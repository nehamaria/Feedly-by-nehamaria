import React from "react";

import ResultItem from "./ResultItem";

const SearchResult = ({ result, setIsOpen, categoryNews }) => {
  return (
    <div className="bg-white flex flex-col p-4 overflow-y-auto scrollbar max-h-96">
      {result.map((news, index) => {
        return (
          <ResultItem
            key={index}
            setIsOpen={setIsOpen}
            newsDetails={news}
            categoryNews={categoryNews}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
