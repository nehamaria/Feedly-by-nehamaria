import React from "react";
import { Checkbox } from "@bigbinary/neetoui/v2";

const FilterForm = ({
  submittedFormCategories,
  onHandleChecked,
  toggleArchived,
  category,
  archived,
}) => {
  return (
    <>
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
    </>
  );
};

export default FilterForm;
