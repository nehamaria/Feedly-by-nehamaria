import React, { useState } from "react";

import News from "./NewsFeed/index";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Articles from "./ArticlesFeed";

import ErrorBoundary from "./ErrorBoundary";
import ArticleNotFound from "./ArticleNotFound";
import { CATEGORYLIST } from "./NewsFeed/constants";

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedCategories, setSubmittedCategories] = useState(CATEGORYLIST);
  const [showArchivedNews, setShowArchivedNews] = useState(false);

  return (
    <Router>
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
        <Route path="/ArticleNotFound">
          <ArticleNotFound />
        </Route>
        <Route path="*">
          <ErrorBoundary />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
