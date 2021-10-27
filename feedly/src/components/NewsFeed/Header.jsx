import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Tooltip, Typography } from "@bigbinary/neetoui/v2";
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";

const HeaderBar = () => {
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
              />
            </Tooltip>
            <Button
              size="large"
              style="secondary"
              label="Filter"
              icon={() => <Filter className="ml-3" size={15} />}
            />
          </div>
        }
        title={
          <Typography style="h4" className="neeto-ui-text-gray-500">
            Feed.ly
          </Typography>
        }
      />
    </div>
  );
};
export default HeaderBar;
