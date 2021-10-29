import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Tooltip, Typography } from "@bigbinary/neetoui/v2";
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

// import SearchNews from "./SearchNews";// import SearchNews from "../Modal/SearchNews";

const HeaderBar = ({ setIsOpen, setIsModalOpen, setShowPane }) => {
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
            <div className="space-y-6">
              <div className="w-1/2 space-y-8">
                <div className="flex flex-row items-center justify-start space-x-6">
                  <Button
                    label="Filter"
                    size="large"
                    style="secondary"
                    icon={() => <Filter className="ml-3" size={15} />}
                    onClick={() => setShowPane(true)}
                  />
                </div>
              </div>
            </div>
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
