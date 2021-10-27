import React from "react";

// import axios from "axios";

import News from "./NewsFeed/index";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Articles from "./ArticlesFeed";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={News} />
        <Route
          exact
          path="/articlesFeed/:category/:title"
          component={Articles}
        />
      </Switch>
    </Router>
  );
}

export default Main;
