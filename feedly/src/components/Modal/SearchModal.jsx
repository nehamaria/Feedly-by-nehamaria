import React, { useState, useCallback, useEffect } from "react";
// import ReactDom from "react"
import ReactDOM from "react-dom";
import { Search, Down, RightArrow } from "@bigbinary/neeto-icons";
import { Input, Typography } from "@bigbinary/neetoui/v2";
import newsApi from "../NewsFeed/NewsList";

function SearchModal({ isOpen, setIsOpen, categoryNews }) {
  const [content, setContent] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [categoryNews, setCategoryNews] = useState({});

  //   const fetchNews = async () => {
  //     try {
  //       const categoryValues = await Promise.all([
  //         newsApi.newsList("national"),
  //         newsApi.newsList("sports"),
  //         newsApi.newsList("business"),
  //         newsApi.newsList("world"),
  //       ]);
  //       // console.log(categoryValues);
  //       let result = categoryValues.reduce((acc, curr) => {
  //         return {
  //           ...acc,
  //           [curr.data.category]: curr.data.data,
  //         };
  //       }, {});
  //       setCategoryNews(result);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchNews();
  //   }, []);
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
    console.log(categoryNews);
    if (!value.length) {
      setContent([]);
      return;
    }
    let results;
    const obj = Object.keys(categoryNews).map((category) => {
      return (results = categoryNews[category].filter((item, idx) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      }));
    });
    setContent(obj.flat());
  };

  const handleOnChange = (e) => {
    search(e.target.value);
  };
  const optimisedVersion = useCallback(debounce(handleOnChange), []);
  if (!isOpen) return null;

  //   if (loading) {
  //     return <></>;
  //   }
  console.log(content);
  return ReactDOM.createPortal(
    <>
      <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-transparent">
        <div
          className="fixed inset-0 w-full backdrop-filter z-10"
          onClick={() => setIsOpen(false)}
          style={{
            backgroundColor: "rgba(27, 31, 35, 0.867)",
            backdropFilter: "blur(2px)",
          }}
        ></div>
        <div className="">
          <div className="m-auto flex items-center justify-center absolute inset-0 ">
            <div className="bg-white z-40 flex flex-col w-1/3">
              <Input
                size="large"
                placeholder="Search for an article."
                prefix={<Search size={20} />}
                suffix={<Down size={20} />}
                onChange={optimisedVersion}
                className="outline-none"
              />
              <div className="bg-white flex flex-col p-4 overflow-y-auto scrollbar max-h-96">
                <Typography style="h5">
                  {content.length
                    ? content.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex gap-x-2 items-center bg-gray-200 hover:bg-indigo-600 hover:text-white p-3 rounded-md mb-2.5 w-full"
                          >
                            <RightArrow />
                            {item.title}
                          </div>
                        );
                      })
                    : null}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("ModalPortal")
  );
}

export default SearchModal;
