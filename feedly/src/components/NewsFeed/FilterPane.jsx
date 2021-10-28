import React, { useState } from "react";
import { Button, Typography, Pane, Checkbox } from "@bigbinary/neetoui/v2";
import { Check, Filter } from "@bigbinary/neeto-icons";
import { PANELLIST } from "./constants";
function FilterPane() {
  const [showPane, setShowPane] = useState(false);
  const category = PANELLIST;
  const [submittedCategories, setSubmittedCategories] = useState([]);
  const defaultCategories=["National","Business","Sports","World"]
  const onHandleSave = () => {};
  return (
    <div className="w-full">
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
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header className="space-y-2">
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
          <Typography style="h4" weight="semibold">
            Category
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <div className="mb-5">
            <Checkbox id="checkbox_name" label="All" />
          </div>
          {category.map((item) => {
            return (
              <div className="mb-5">
                <Checkbox
                  id="checkbox_name"
                  label={item}
                  onChange={() => setSubmittedCategories({ item })}
                />
              </div>
            );
          })}
        </Pane.Body>
        <Pane.Footer className=" space-x-2 -mt-4">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => onHandleSave}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
}

export default FilterPane;
