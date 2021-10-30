import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import News from "./NewsFeed/index";
import Articles from "./ArticlesFeed";
import { CATEGORYLIST } from "./NewsFeed/constants";
import ErrorPage from "./ErrorBoundary/ErrorPage";

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedCategories, setSubmittedCategories] = useState(CATEGORYLIST);
  const [showArchivedNews, setShowArchivedNews] = useState(false);
  return (
    <Router>
      <ToastContainer />

      <Switch>
        <Route exact path="/">
          <News
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            submittedCategories={submittedCategories}
            setSubmittedCategories={setSubmittedCategories}
            showArchivedNews={showArchivedNews}
            setShowArchivedNews={setShowArchivedNews}
          />
        </Route>
        <Route exact path="/articlesFeed/:category/:title">
          <Articles
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            submittedCategories={submittedCategories}
            setSubmittedCategories={setSubmittedCategories}
            showArchivedNews={showArchivedNews}
            setShowArchivedNews={setShowArchivedNews}
          />
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
