import React from "react";
import HeaderBar from "./NewsFeed/Header";
import errorimage from "../Assets/Group.png";
import { Button, Typography } from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div>
      <HeaderBar />
      <div className="flex flex-col items-center justify-center  ">
        <div className="mt-52 pb-16 ">
          <img src={errorimage} />
        </div>
        <Typography style="h3" className="pb-5 w-80 ">
          You have landed somwhere unknown.
        </Typography>
        <Link to="/">
          <Button
            icon={() => <Home className="mr-2" />}
            iconPosition="left"
            label="Take me home"
            style="secondary"
          />
        </Link>
      </div>
    </div>
  );
}

export default ErrorBoundary;
