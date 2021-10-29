import React from "react";
import { Button, Typography, Pane } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";

import FilterForm from "./FilterForm";

const FilterPane = ({
  submittedFormCategories,
  onHandleChecked,
  toggleArchived,
  category,
  onHandleCancel,
  showPane,
  onHandleSave,
  archived
}) => {
  return (
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
        <FilterForm
          submittedFormCategories={submittedFormCategories}
          onHandleChecked={onHandleChecked}
          toggleArchived={toggleArchived}
          category={category}
          archived={archived}
          
        />
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
  );
};

export default FilterPane;
