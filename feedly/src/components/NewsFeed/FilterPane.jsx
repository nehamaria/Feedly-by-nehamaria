import React, { useEffect, useState } from "react";
import { Button, Typography, Pane, Checkbox } from "@bigbinary/neetoui/v2";
import { Check, Filter } from "@bigbinary/neeto-icons";
import { PANELLIST } from "./constants";
import News from ".";

function FilterPane({
  showPane,
  setShowPane,
  submittedCategories,
  setSubmittedCategories,
  showArchivedNews,
  setShowArchivedNews,
}) {
  const category = PANELLIST;
  const [submittedFormCategories, setSubmittedFormCategories] =
    useState(submittedCategories);

  const [archived, setArchived] = useState(showArchivedNews);

  const onHandleSave = () => {
    setSubmittedCategories(submittedFormCategories);
    setShowArchivedNews(archived);
    setShowPane(false);
  };
  const onHandleCancel = () => {
    setSubmittedFormCategories(submittedCategories);
    setArchived(showArchivedNews);
    setShowPane(false);
  };
  const onHandleChecked = (item) => {
    if (!submittedFormCategories.includes(item)) {
      setSubmittedFormCategories((prevState) => [...prevState, item]);
    } else {
      setSubmittedFormCategories(
        submittedFormCategories.filter((category) => category !== item)
      );
    }
  };

  const toggleArchived = () => {
    setArchived(!archived);
  };

  // useEffect(() => {
  //   setSubmittedFormCategories(submittedCategories);
  // }, [submittedCategories]);

  return (
    <div className="w-full">
      <Pane isOpen={showPane} onClose={onHandleCancel}>
        <Pane.Header className="space-y-2">
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
          <Typography style="h4" weight="semibold">
            Category
          </Typography>
        </Pane.Header>
        <Pane.Body>
          {category.map((item) => {
            return (
              <div className="mb-5 capitalize">
                <Checkbox
                  checked={submittedFormCategories.includes(item)}
                  id="checkbox_name"
                  label={item}
                  onChange={() => onHandleChecked(item)}
                />
              </div>
            );
          })}
          <div className="mb-5">
            <Checkbox
              checked={archived}
              id="checkbox_name"
              label="Include Archived Articles"
              onChange={toggleArchived}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className=" space-x-2 -mt-4">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={onHandleSave}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={onHandleCancel}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
}

export default FilterPane;
