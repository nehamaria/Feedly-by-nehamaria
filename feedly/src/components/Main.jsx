import React, { useState } from "react";

// import axios from "axios";

import News from "./NewsFeed/index";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Articles from "./ArticlesFeed";

import ErrorBoundary from "./ErrorBoundary";
import ArticleNotFound from "./ArticleNotFound";

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <News isOpen={isOpen} setIsOpen={setIsOpen} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </Route>
        <Route exact path="/articlesFeed/:category/:title">
          <Articles isOpen={isOpen} setIsOpen={setIsOpen} />
        </Route>
        <Route path="/ErrorBoundaries"><ErrorBoundary/></Route>
        <Route path="/ArticleNotFound"><ArticleNotFound/></Route>
      </Switch>
    </Router>
  );
}

export default Main;
