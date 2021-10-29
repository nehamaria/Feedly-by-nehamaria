import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Tooltip, Typography } from "@bigbinary/neetoui/v2";
import { Search, Notification } from "@bigbinary/neeto-icons";
import FilterPane from "./FilterPane";
import { useState } from "react";
import { Link } from "react-router-dom";

// import SearchNews from "./SearchNews";// import SearchNews from "../Modal/SearchNews";

const HeaderBar = ({ categoryNews, isOpen, setIsOpen, setIsModalOpen ,submittedCategories,setSubmittedCategories}) => {
  return (
    <div className="px-4 border-b-2">
      <Header
        actionBlock={
          <div className="flex space-x-4 items-center">
            <Tooltip content="Search" followCursor="horizontal" placement="top">
              <Button
                label=""
                style="secondary"
                className="neeto-ui-bg-white"
                icon={() => <Search />}
                onClick={() => setIsOpen(true)}
              />
            </Tooltip>
            <Tooltip
              content="Notification"
              followCursor="horizontal"
              placement="top"
            >
              <Button
                label=""
                style="secondary"
                className="neeto-ui-bg-white"
                icon={() => <Notification />}
                onClick={() => setIsModalOpen(true)}
              />
            </Tooltip>

            <FilterPane submittedCategories={submittedCategories} setSubmittedCategories={setSubmittedCategories}/>
          </div>
        }
        title={
          <Link to="/">
            <Typography style="h4" className="neeto-ui-text-gray-500">
              Feed.ly
            </Typography>
          </Link>
        }
      />
    </div>
  );
};
export default HeaderBar;
