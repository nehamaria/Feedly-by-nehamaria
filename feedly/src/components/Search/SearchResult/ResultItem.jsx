import React from "react";
import { Link } from "react-router-dom";
import { RightArrow } from "@bigbinary/neeto-icons";

import removeSpecialCharaters from "components/Helper";

const ResultItem = ({ setIsOpen, newsDetails, categoryNews }) => {
  return (
    <Link
      to={{
        pathname: `/articlesFeed/${
          newsDetails.category
        }/${removeSpecialCharaters(newsDetails.title)}`,
        state: { categoryNews: categoryNews },
      }}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="flex gap-x-2 items-center bg-gray-200 hover:bg-indigo-600 hover:text-white p-3 rounded-md mb-2.5 w-full"
      >
        <RightArrow />
        {newsDetails.title}
      </div>
    </Link>
  );
};

export default ResultItem;
