import React from "react";
import { useHistory } from "react-router";
import { Button, Typography } from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";


import errorimage from "../../assets/ErrorImage.png";

const  ErrorPage=()=> {
  const history = useHistory();

  return (
    <div>
      <div className="flex flex-col items-center justify-center  ">
        <div className="mt-52 pb-16 ">
          <img src={errorimage} />
        </div>
        <Typography style="h3" className="pb-5 w-80 ">
          You have landed somwhere unknown.
        </Typography>
        <Button
          icon={() => <Home className="mr-2" />}
          iconPosition="left"
          label="Take me home"
          style="secondary"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </div>
  );
}

export default ErrorPage;
